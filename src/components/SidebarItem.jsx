import React from 'react';

import getPlaceIcon from '../services/getPlaceIcon';

export default ({ place, placeFeature, selectPlace }) => (
  <div className="place-list-item">
    <div onClick={() => selectPlace(placeFeature)}>{getPlaceIcon(place)} {place.name}</div>
    <div className="place-list-address">{place.address}</div>
  </div>
);
