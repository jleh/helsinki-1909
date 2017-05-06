import React from 'react';
import { connect } from 'react-redux';

import { selectPlace } from '../reducers/places';

import PlaceListItem from './SidebarItem.jsx';

import './PlaceList.css';

const mapStateToProps = state => ({
  places: filterPlaceList(state.places.places.sort(sortPlacesByName), state.places.category)
});

function filterPlaceList(places, category) {
  if (category === 'all')
    return places;

  return places.filter((place) => place.properties.category === category);
}

function sortPlacesByName(place1, place2) {
  return place1.properties.name < place2.properties.name ? -1 : 1;
}

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
