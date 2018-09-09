import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configStore from 'bootstrap/configStore';
import Main from 'components/Main/Main'
import './App.css';

const store = configStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
