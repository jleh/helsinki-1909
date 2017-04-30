import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

import './PlaceDetails.css';

import { selectPlace } from '../reducers/places';

const mapStateToProps = state => ({
  place: state.places.selectedPlace
});

const mapDispatchToProps = dispatch => ({
  closeDetails: () => dispatch(selectPlace(undefined))
});

const placeDetails = ({ place, closeDetails }) => (
  <div>
    { place !== undefined &&
    <Modal show={true} bsSize="lg" onHide={closeDetails}>
      <Modal.Body>
        <div
          className="place-details-cover-photo"
          style={{
            backgroundImage: `url(https://s3.eu-central-1.amazonaws.com/karttalehtinen-helsinki-1909/${place.properties.cover_photo})`
          }}
        />
        <h1>{place.properties.name}</h1>
        <div>
          <span className="address">{place.properties.address}</span> {place.properties.owner}</div>
        <div className="place-description">{place.properties.description}</div>

        <Button onClick={closeDetails}>Sulje</Button>
      </Modal.Body>
    </Modal>
    }
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(placeDetails);
