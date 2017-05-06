import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { connect } from 'react-redux';

import { selectCategory } from '../reducers/places';

import PlaceList from './PlaceList.jsx';

const mapStateToProps = state => ({
  selected: state.places.category
});

const mapDispatchToProps = dispatch => ({
  setCategory: category => dispatch(selectCategory(category))
});

const sidebar = ({ selected, setCategory }) => (
  <div className="sidebar">
    <div className="app-title">
      Helsinki 1909
    </div>
    <div className="category-buttons">
      <ButtonGroup>
        <Button bsStyle={getStyle('all', selected)} onClick={() => setCategory('all')}>
          Kaikki
        </Button>
        <Button bsStyle={getStyle('hotel', selected)} onClick={() => setCategory('hotel')}>
          <i className="fa fa-bed" aria-hidden="true"></i>
        </Button>
        <Button bsStyle={getStyle('cafe', selected)} onClick={() => setCategory('cafe')}>
          <i className="fa fa-coffee" aria-hidden="true"></i>
        </Button>
        <Button bsStyle={getStyle('restaurant', selected)} onClick={() => setCategory('restaurant')}>
          <i className="fa fa-cutlery" aria-hidden="true"></i>
        </Button>
      </ButtonGroup>
    </div>
    <PlaceList />
  </div>
);

function getStyle(group, selected) {
  return group === selected ? 'primary' : 'default';
}

export default connect(mapStateToProps, mapDispatchToProps)(sidebar);
