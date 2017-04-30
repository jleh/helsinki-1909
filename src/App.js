import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './App.css';

import reducers from './reducers';
import loadData from './services/fetchData';

import MapComponent from './components/MapComponent.jsx';

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
          <MapComponent />
        </div>
      </Provider>
    );
  }
}

export default App;
