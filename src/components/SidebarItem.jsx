import React from 'react';
// import {  } from 'react-bootstrap';

export default ({ place, placeFeature, selectPlace }) => (
  <div className="place-list-item">
    <div onClick={() => selectPlace(placeFeature)}>{getPlaceIcon(place)} {place.name}</div>
    <div className="place-list-address">{place.address}</div>
  </div>
);

function getPlaceIcon(place) {
  if (place.category === 'cafe')
    return (<i className="fa fa-coffee" aria-hidden="true"></i>);
  if (place.category === 'restaurant')
    return (<i className="fa fa-cutlery" aria-hidden="true"></i>);
  if (place.category.indexOf('hotel') !== -1) {
    return (<i className="fa fa-bed" aria-hidden="true"></i>);
  }

  return <div />;
}
