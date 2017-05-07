import React, { Component } from 'react';
import fetchFinnaImages from '../services/fetchFinnaImages';

export default class PlaceCover extends Component {

  constructor(props) {
    super(props);

    this.state = { images: [], selectedImage: 0 };

    this.fetchImages = this.fetchImages.bind(this);
    this.nextPhoto = this.nextPhoto.bind(this);
    this.addPhotos = this.addPhotos.bind(this);
  }

  componentDidMount() {
    if (this.props.place)
      this.fetchImages();
  }

  fetchImages() {
    if (this.props.place.cover_photo_search) {
      fetchFinnaImages(this.props.place.cover_photo_search).then(this.addPhotos);
    } else {
      fetchFinnaImages(this.props.place.address).then(this.addPhotos);
    }
  }

  addPhotos(data) {
    if (data.resultCount === 0) return;

    const photoRecords = data.records.filter(record => record.formats.map(format => format.translated).indexOf('Valokuva') !== -1);
    const cover = photoRecords.find(record => record.id === this.props.place.cover_photo);

    if (cover) {
      photoRecords.splice(photoRecords.indexOf(cover), 1);
      photoRecords.unshift(cover);
    }

    photoRecords.forEach(record => console.log(record));

    this.setState({ images: this.state.images.concat(photoRecords) });
  }

  nextPhoto() {
    const nextImage = (this.state.selectedImage + 1) % (this.state.images.length);
    this.setState({ selectedImage: nextImage });
  }

  previousPhoto() {
    const nextImage = (this.state.selectedImage - 1) % (this.state.images.length);
    this.setState({ selectedImage: nextImage });
  }

  render() {
    let coverImage = '';
    let attribution = '';
    let title = '';

    if (this.state.images.length > 0) {
      const photo = this.state.images[this.state.selectedImage];

      coverImage = `url(http://finna.fi${photo.images[0]})`;
      attribution = photo.nonPresenterAuthors[0].name;
      title = photo.title;
    }
    
    return (
      <div
        className="place-details-cover-photo"
        style={{
          backgroundImage: coverImage
        }}
      >
        <div className="photo-attributes">{attribution}: {title}</div>
        <div className="next-photo" onClick={this.nextPhoto}>&gt;</div>
      </div>
    );
  }
}
