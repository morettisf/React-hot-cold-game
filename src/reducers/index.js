import { GUESS_NUMBER } from '../actions/index';
import { NEW_GAME } from '../actions/index';
import { GET_FEWEST_GUESSES } from '../actions/index';
import { POST_FEWEST_GUESSES } from '../actions/index';
import React, { Component } from 'react';


function fireBounce() {
  const fire = document.querySelector('#fire-wrapper');
  fire.classList.add('bounce');

  setTimeout(() => {
    fire.classList.remove('bounce');
  }, 1000)
}

function iceBounce() {
  const ice = document.querySelector('#ice-wrapper');
  ice.classList.add('bounce');

  setTimeout(() => {
    ice.classList.remove('bounce');
  }, 1000)
}


let initialState = {
  randomNum: Math.floor(Math.random() * 100) + 1,
  guesses: [],
  counter: 0,
  message: '',
  correct: false,
  fewest: null
}

export default function(state, action) {
  state = state || initialState;

  switch (action.type) {
    case GUESS_NUMBER:

      let guessNum = parseInt(action.number);

      // logic for providing hot/cold message based on input number
      if (guessNum === state.randomNum) {
        return Object.assign({}, state, { correct: true, message: 'You win!', counter: state.counter + 1, guesses: state.guesses.concat(action.number) });
      }

      else if (state.randomNum - 5 <= guessNum && guessNum <= state.randomNum + 5) {
        fireBounce();
        return Object.assign({}, state, { correct: false, message: 'Hot!', counter: state.counter + 1, guesses: state.guesses.concat(action.number) });
      }

      else if (state.randomNum - 15 <= guessNum && guessNum <= state.randomNum + 15) {
        fireBounce();
        return Object.assign({}, state, { correct: false, message: 'Warm!', counter: state.counter + 1, guesses: state.guesses.concat(action.number) });
      }

      else if (state.randomNum - 25 <= guessNum && guessNum <= state.randomNum + 25) {
        fireBounce();
        return Object.assign({}, state, { correct: false, message: 'Luke Warm...', counter: state.counter + 1, guesses: state.guesses.concat(action.number) });
      }

      else if (isNaN(guessNum)) {

        return Object.assign({}, state, { correct: false, message: 'Try a number...' });
      }

      else {
        iceBounce();
        return Object.assign({}, state, { correct: false, message: 'Cold!', counter: state.counter + 1, guesses: state.guesses.concat(action.number) });
      }

    case NEW_GAME:

      if (action.newGame === true) {
        return Object.assign({}, state, { randomNum: Math.floor(Math.random() * 100) + 1, guesses: [], counter: 0, message: '', correct: false, fewest: null });
      }

    case GET_FEWEST_GUESSES:
      action.payload
        .then((res) => {
          let fewest = res.data.fewestGuesses;
          return Object.assign(state, { fewest: fewest });
        })
        .catch((err) => {
          console.log('axios: ', err)
        })
  }

  return state;
}