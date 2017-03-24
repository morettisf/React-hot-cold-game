import { GUESS_NUMBER } from '../actions/index';
import { NEW_GAME } from '../actions/index';
import { GET_FEWEST_GUESSES } from '../actions/index';
import { POST_FEWEST_GUESSES } from '../actions/index';
import React, { Component } from 'react';

let initialState = {
  randomNum: Math.floor(Math.random() * 100) + 1,
  guesses: [],
  counter: 0,
  message: '',
  correct: false,
  fewest: 0
}

export default function(state, action) {
  state = state || initialState;
  let fewest = null;

  switch (action.type) {
    case GUESS_NUMBER:
      // console.log('state is:', state)
      // console.log('action is:', action)

      let guessNum = parseInt(action.number);

      // logic for providing hot/cold message based on input number
      if (guessNum === state.randomNum) {
        return Object.assign({}, state, { correct: true, message: 'You win!', counter: state.counter + 1, guesses: state.guesses.concat(action.number) });
      }

      else if (state.randomNum - 5 <= guessNum && guessNum <= state.randomNum + 5) {
        return Object.assign({}, state, { correct: false, message: 'Hot!', counter: state.counter + 1, guesses: state.guesses.concat(action.number) });
      }

      else if (state.randomNum - 15 <= guessNum && guessNum <= state.randomNum + 15) {
        return Object.assign({}, state, { correct: false, message: 'Warm!', counter: state.counter + 1, guesses: state.guesses.concat(action.number) });
      }

      else if (state.randomNum - 25 <= guessNum && guessNum <= state.randomNum + 25) {
        return Object.assign({}, state, { correct: false, message: 'Luke Warm...', counter: state.counter + 1, guesses: state.guesses.concat(action.number) });
      }

      else if (isNaN(guessNum)) {
        return Object.assign({}, state, { correct: false, message: 'Try a number...' });
      }

      else {
        return Object.assign({}, state, { correct: false, message: 'Cold!', counter: state.counter + 1, guesses: state.guesses.concat(action.number) });
      }

    case NEW_GAME:

      if (action.newGame === true) {
        let newGame = {
          randomNum: Math.floor(Math.random() * 100) + 1,
          guesses: [],
          counter: 0,
          message: '',
          correct: false,
          fewest: state.fewest
        }
        return newGame;
      }

    case GET_FEWEST_GUESSES:
      action.payload
        .then((res) => {
          let fewest = res.data.fewestGuesses
          return Object.assign({}, state, { fewest: fewest });
        })
        .catch((err) => {
          // console.log('axios: ', err)
        })

    case POST_FEWEST_GUESSES:

      action.payload
        .then((res) => {
          let fewest = res.data.fewestGuesses;
          return Object.assign({}, state, { fewest: fewest });
        })
        .catch((err) => {
          // console.log('axios: ', err)
        })
  }

  return state;
}