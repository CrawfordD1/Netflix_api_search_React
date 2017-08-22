import React, { Component } from 'react';
import './App.css';
import FilmContainer from './containers/FilmContainer.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
       <FilmContainer id="film-container"/>
      </div>
    );
  }
}

export default App;
