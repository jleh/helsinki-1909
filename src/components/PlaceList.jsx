import React from 'react';
import { connect } from 'react-redux';

import { selectPlace } from '../reducers/places';

import PlaceListItem from './SidebarItem.jsx';

import './PlaceList.css';

const mapStateToProps = state => ({
  places: state.places.places
});

const mapDispatchToProps = dispatch => ({
  select: place => dispatch(selectPlace(place))
});

const placeList = ({ places, select }) => (
  <div>
    {places.map((place) => (
      <PlaceListItem
        key={`${place.properties.name}-${place.properties.owner}`}
        place={place.properties}
        placeFeature={place}
        selectPlace={select}
      />
    ))}
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(placeList);
