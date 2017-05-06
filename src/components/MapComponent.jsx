import React from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { connect } from 'react-redux';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import './MapComponent.css';

import { selectPlace } from '../reducers/places';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});;

const mapStateToProps = state => ({
  places: state.places.places
});

const mapDispatchToProps = dispatch => ({
  onPlaceClick: place => dispatch(selectPlace(place))
});

const position = [60.168, 24.942];
const options = { tms: true };

const map = ({ places, onPlaceClick }) => (
  <Map className="app-map" center={position} zoom={15} maxZoom={17} minZoom={13}>
    <TileLayer
      url='http://karttalehtinen.s3-website-eu-west-1.amazonaws.com/helsinki1909/{z}/{x}/{y}.png'
      attribution='&copy; Helsingin kaupunginarkisto'
      options={options}
      tms
    />
    {places.map(place => (
      <Marker
        position={[place.geometry.coordinates[1], place.geometry.coordinates[0]]}
        key={`${place.properties.name}-${place.properties.owner}`}
        onClick={(event) => onPlaceClick(event.target.options.place.place)}
        place={{ place }}
      />
    ))}
  </Map>
);

export default connect(mapStateToProps, mapDispatchToProps)(map);
