import React from 'react';

export default function getPlaceIcon(place) {
  if (place.category === 'cafe')
    return (<i className="fa fa-coffee" aria-hidden="true"></i>);
  if (place.category === 'restaurant')
    return (<i className="fa fa-cutlery" aria-hidden="true"></i>);
  if (place.category.indexOf('hotel') !== -1) {
    return (<i className="fa fa-bed" aria-hidden="true"></i>);
  }

  return <div />;
}
