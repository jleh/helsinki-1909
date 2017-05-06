import { addPlaces } from '../reducers/places';

export default function loadData(store) {
  fetch('features.geojson')
    .then(res => res.json())
    .then(json => store.dispatch(addPlaces(json.features)))
}
