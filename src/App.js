import React, { Component } from 'react';
import './App.css';
import ItunesSearchContainer from './containers/ItunesSearchContainer'

class App extends Component {
  render() {
    return(
    <div className="App">
      <ItunesSearchContainer />
      </div>
    );
  }
}

export default App;
