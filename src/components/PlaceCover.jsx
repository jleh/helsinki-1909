import React, { Component } from 'react';
import fetchFinnaImages from '../services/fetchFinnaImages';

export default class PlaceCover extends Component {

  constructor(props) {
    super(props);

    this.state = { images: [] };
    this.fetchImages = this.fetchImages.bind(this);
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

  render() {
    let coverImage = '';

    if (this.props.place.cover_photo) {
      coverImage = `url(https://s3.eu-central-1.amazonaws.com/karttalehtinen-helsinki-1909/${this.props.place.cover_photo})`;
    }

    if (this.props.place.cover_photo === undefined && this.state.images.length > 0) {
      coverImage = `url(http://finna.fi${this.state.images[0].images[0]})`
    }
    
    return (
      <div
        className="place-details-cover-photo"
        style={{
          backgroundImage: coverImage
        }}
      />
    );
  }
}
