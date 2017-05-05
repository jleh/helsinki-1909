import React from 'react';
import { connect } from 'react-redux';

import './PlaceList.css';

const mapStateToProps = state => ({
  places: state.places.places
});

const placeList = ({ places }) => (
  <div>
    {places.map((place) => (
      <div 
        key={`${place.properties.name}-${place.properties.owner}`}
        className="place-list-item"
      >
        {place.properties.name}
      </div>
    ))}
  </div>
);

export default connect(mapStateToProps)(placeList);
