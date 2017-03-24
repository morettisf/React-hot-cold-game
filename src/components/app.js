import React, { Component } from 'react';

import GameInputs from './game-inputs';
import GameResults from './game-results';

export default class App extends Component {
  render() {
    return (
      <div>
        <img src='../images/question-white.png' />
        <div id='main-content'>
          <h1>Guess the Number!</h1>
          <h2>Find the correct number between&nbsp;1&nbsp;-&nbsp;100</h2>
          <div id='game-container'>
            <GameInputs />
            <GameResults />
          </div>
        </div>
      </div>
    );
  }
}