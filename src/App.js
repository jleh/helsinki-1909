import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/font-awesome.css';

import reducers from './reducers';
import loadData from './services/fetchData';

import MapComponent from './components/MapComponent.jsx';
import PlaceDetails from './components/PlaceDetails.jsx';
import Sidebar from './components/Sidebar.jsx';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
);

loadData(store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Sidebar />
          <div className="map-wrapper">
            <MapComponent />
          </div>
          <PlaceDetails />
        </div>
      </Provider>
    );
  }
}

export default App;
