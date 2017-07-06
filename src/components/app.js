import React, { Component } from 'react';
import { connect } from 'react-redux';

import FireAndIce from './fire-ice';
import Header from './header';
import GameContainer from './game-container';

export class App extends Component {

  background(message) {

    if (message === '') {
      return '';
    }

    else if (message === 'Hot!') {
      return 'hot';
    }

    else if (message === 'Warm!') {
      return 'warm';
    }

    else if (message === 'Luke Warm...') {
      return 'luke-warm';
    }

    else if (message === 'Cold!') {
      return 'cold snow';
    }

    else if (message === 'You win!') {
      return '';
    }

  }
  
  render() {
    return (
      <div id='app' className={this.background(this.props.message)}>
        <FireAndIce wait={50} />
        <div id='game'>
          <Header wait={1000} />
          <GameContainer wait={1300} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.message
  }
}

export default connect(mapStateToProps)(App)