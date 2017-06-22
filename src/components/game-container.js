import React, { Component } from 'react';

import GameInputs from './game-inputs';
import GameResults from './game-results';

export default class GameContainer extends Component {

  constructor(props) {
    super(props);

    this.state = { show: '' };
  }

  componentWillMount() {

    setTimeout(() => {
      this.show();
    }, this.props.wait);

  }

  show() {
    this.setState({ show: 'show' });
  }

  render() {
    return (
      <div id='game-container' className={this.state.show} >
        <GameInputs />
        <GameResults />
      </div>
    );
  }

}