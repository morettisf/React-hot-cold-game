import React, { Component } from 'react';
import { connect } from 'react-redux';

import FireAndIce from './fire-ice';
import Header from './header';
import GameContainer from './game-container';

class App extends Component {

  background(message) {

    if (message === '') {
      return '';
    }

    else if (message === 'Hot!' || message === 'Warm!' || message === 'Luke Warm...') {
      return 'hot';
    }

    else if (message === 'Cold!') {
      return 'cold';
    }

    else if (message === 'You win!') {
      return '';
    }

  }
  
  render() {
    return (
      <div id='app' className={this.background(this.props.message)}>
        <FireAndIce wait={50} />
        <Header wait={1000} />
        <GameContainer wait={1100} />
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