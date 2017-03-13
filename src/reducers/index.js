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

  switch (action.type) {
    case GUESS_NUMBER:
      // console.log('state is:', state)
      // console.log('action is:', action)

      let guessNum = parseInt(action.number);

      state.counter = state.counter + 1;
      state.guesses.push(action.number)

      // logic for providing hot/cold message based on input number
      if (guessNum === state.randomNum) {
        state.correct = true;
        state.message = 'You win!'
      }

      else if (state.randomNum - 5 <= guessNum && guessNum <= state.randomNum + 5) {
        state.correct = false;
        state.message = 'Hot!'
      }

      else if (state.randomNum - 15 <= guessNum && guessNum <= state.randomNum + 15) {
        state.correct = false;
        state.message = 'Warm!'
      }

      else if (state.randomNum - 25 <= guessNum && guessNum <= state.randomNum + 25) {
        state.correct = false;
        state.message = 'Luke Warm...'
      }

      else {
        state.correct = false;
        state.message = 'Cold!'
      }

      return Object.assign({}, state);
      break

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
      break

    case GET_FEWEST_GUESSES:

      action.payload
        .then((res) => {

          let fewest = res.data.fewestGuesses;
          state.fewest = fewest
          return Object.assign({}, state);
        })
        .catch((err) => {
          // console.log('axios: ', err)
        })
      break

    case POST_FEWEST_GUESSES:

      action.payload
        .then((res) => {
          let fewest = res.data.fewestGuesses;
          state.fewest = fewest
          // return Object.assign({}, state);
        })
        .catch((err) => {
          // console.log('axios: ', err)
        })
      break
  }

  return state;
}