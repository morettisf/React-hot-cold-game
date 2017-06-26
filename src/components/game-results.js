import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newGame } from '../actions/index';
import { bindActionCreators } from 'redux';
import FewestGuesses from './fewest-guesses';
import { guessNum } from '../actions/index';
import axios from 'axios';

class GameResults extends Component {

  constructor(props) {
    super(props);

    this.resetAll = this.resetAll.bind(this);
  }

  resetAll(event) {
    event.preventDefault();
    this.props.newGame(true)
    let fewestGuess = document.querySelector('#fewest-guess');
    fewestGuess.classList.remove('fewest');
  }

  postCount(count) {
    const url = '/fewest-guesses';
    let request = axios.post(url, { count })
      .then((res) => {
      })
      .catch((err) => {
        console.log('axios: ', err)
      })
  }

  render() {

    let guesses = this.props.guesses.join(', ')
    let resetGame = null;

    if (this.props.correct === true) {

      if (this.props.counter < this.props.fewest) {
        this.postCount(this.props.counter)
        this.props.guessNum();
        let fewestGuess = document.querySelector('#fewest-guess');
        fewestGuess.classList.add('fewest');
      }

      resetGame = <button id='reset' onClick={this.resetAll}>Reset Game</button>

    }
    

    return (
      <div>
        <div id='message'>{this.props.message || 'Start Guessing...'}</div>
        {resetGame}
        <div id='guess-box'>
          <div>Your Guesses: 
            <div id='user-guesses'>{guesses}</div>
          </div>
          <div id='guess-count'>Guess Count: {this.props.counter}</div>
          <FewestGuesses />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    counter: state.counter,
    guesses: state.guesses,
    message: state.message,
    correct: state.correct,
    fewest: state.fewest
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ newGame, guessNum }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GameResults);




