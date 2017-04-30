const ADD_PLACES = 'helsinki/places/ADD_PLACES';
const SELECT_PLACE = 'helsinki/places/SELECT_PLACE';

export default (state = { places: [], selectedPlace: undefined }, action) => {
  switch (action.type) {
    case ADD_PLACES:
      return Object.assign({}, state, { places: action.places });
    case SELECT_PLACE:
      return Object.assign({}, state, { selectedPlace: action.selectedPlace });
    default:
      return state;
  }
}

export function addPlaces(places) {
  return { type: ADD_PLACES, places };
}

export function selectPlace(selectedPlace) {
  return { type: SELECT_PLACE, selectedPlace };
}
