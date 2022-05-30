import logo from './logo.svg';
import './App.css';
import Main from './components/MainComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class App extends Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
