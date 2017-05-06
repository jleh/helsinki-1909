import React, { Component } from 'react';
import fetchFinnaImages from '../services/fetchFinnaImages';

export default class PlaceCover extends Component {

  constructor(props) {
    super(props);

    this.state = { images: [], selectedImage: 0 };

    this.fetchImages = this.fetchImages.bind(this);
    this.nextPhoto = this.nextPhoto.bind(this);
  }

  componentDidMount() {
    if (this.props.place)
      this.fetchImages();
  }

  fetchImages() {
    fetchFinnaImages(this.props.place.address).then(data => {
      if (data.resultCount === 0) return;

      const photoRecords = data.records.filter(record => record.formats.map(format => format.translated).indexOf('Valokuva') !== -1);

      photoRecords.forEach(record => console.log(record));
      this.setState({ images: photoRecords });
    });
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

    if (this.props.place.cover_photo) {
      coverImage = `url(https://s3.eu-central-1.amazonaws.com/karttalehtinen-helsinki-1909/${this.props.place.cover_photo})`;
    }

    if (this.props.place.cover_photo === undefined && this.state.images.length > 0) {
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
