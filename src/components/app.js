import React, { Component } from 'react';

import GameInputs from './game-inputs';
import GameResults from './game-results';

export default class App extends Component {
  render() {
    return (
      <div id='game-container'>
        <GameInputs />
        <GameResults />
      </div>
    );
  }
}