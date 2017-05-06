import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

import './PlaceDetails.css';

import { selectPlace } from '../reducers/places';
import getPlaceIcon from '../services/getPlaceIcon';

import PlaceCover from './PlaceCover.jsx';

const mapStateToProps = state => ({
  place: state.places.selectedPlace
});

const mapDispatchToProps = dispatch => ({
  closeDetails: () => dispatch(selectPlace(undefined))
});

const placeDetails = ({ place, closeDetails }) => {
  if (!place)
    return (<div></div>);

  return (
    <div>
    <Modal show={true} bsSize="lg" onHide={closeDetails}>
      <Modal.Body>
        <PlaceCover place={place.properties} />
        <h1>{getPlaceIcon(place.properties)} {place.properties.name}</h1>
        <div>
          <span className="address">{place.properties.address}</span> {place.properties.owner}</div>
        <div className="place-description">{place.properties.description}</div>

        <Button onClick={closeDetails}>Sulje</Button>
      </Modal.Body>
    </Modal>
  </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(placeDetails);
