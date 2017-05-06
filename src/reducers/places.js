const ADD_PLACES = 'helsinki/places/ADD_PLACES';
const SELECT_PLACE = 'helsinki/places/SELECT_PLACE';
const SELECT_CATEGORY = 'helsinki/places/SELECT_CATEGORY';

export default (state = { places: [], selectedPlace: undefined, category: 'all' }, action) => {
  switch (action.type) {
    case ADD_PLACES:
      return Object.assign({}, state, { places: action.places });
    case SELECT_PLACE:
      return Object.assign({}, state, { selectedPlace: action.selectedPlace });
    case SELECT_CATEGORY:
      return Object.assign({}, state, { category: action.category });
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

export function selectCategory(category) {
  return { type: SELECT_CATEGORY, category }
}
