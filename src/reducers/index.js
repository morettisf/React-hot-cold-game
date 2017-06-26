import { GUESS_NUMBER } from '../actions/index';
import { NEW_GAME } from '../actions/index';
import { GET_FEWEST_GUESSES } from '../actions/index';
import { POST_FEWEST_GUESSES } from '../actions/index';
import React, { Component } from 'react';


function bounce(character) {

  const fire = document.querySelector('#fire-wrapper');
  const ice = document.querySelector('#ice-wrapper');
  const message = document.querySelector('#message');

  message.classList.add('shake');

  setTimeout(() => {
    message.classList.remove('shake');
  }, 200)

  if (character === 'fire') {
    fire.classList.add('bounce-right');

    setTimeout(() => {
      fire.classList.remove('bounce-right');
    }, 1000)
  }

  else if (character === 'ice') {
    ice.classList.add('bounce-left');

    setTimeout(() => {
      ice.classList.remove('bounce-left');
    }, 1000)
  }

  else if (character === 'both') {
    fire.classList.add('bounce-happy-right');

    setTimeout(() => {
      ice.classList.add('bounce-happy-left');
    }, 500)
  }

  else {
    fire.classList.remove('bounce-happy-right');
    ice.classList.remove('bounce-happy-left');
  }

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
        bounce('both');
        return Object.assign({}, state, { correct: true, message: 'You win!', counter: state.counter + 1, guesses: state.guesses.concat(action.number) });
      }

      else if (state.randomNum - 5 <= guessNum && guessNum <= state.randomNum + 5) {
        bounce('fire');
        return Object.assign({}, state, { correct: false, message: 'Hot!', counter: state.counter + 1, guesses: state.guesses.concat(action.number) });
      }

      else if (state.randomNum - 15 <= guessNum && guessNum <= state.randomNum + 15) {
        bounce('fire');
        return Object.assign({}, state, { correct: false, message: 'Warm!', counter: state.counter + 1, guesses: state.guesses.concat(action.number) });
      }

      else if (state.randomNum - 25 <= guessNum && guessNum <= state.randomNum + 25) {
        bounce('fire');
        return Object.assign({}, state, { correct: false, message: 'Luke Warm...', counter: state.counter + 1, guesses: state.guesses.concat(action.number) });
      }

      else if (guessNum < 1) {
        bounce('none');
        return Object.assign({}, state, { correct: false, message: 'Above 1...' });
      }

      else if (guessNum > 100) {
        bounce('none');
        return Object.assign({}, state, { correct: false, message: 'Below 100...' });
      }

      else if (isNaN(guessNum)) {
        bounce('none');
        return Object.assign({}, state, { correct: false, message: 'Try a number...' });
      }

      else {
        bounce('ice');
        return Object.assign({}, state, { correct: false, message: 'Cold!', counter: state.counter + 1, guesses: state.guesses.concat(action.number) });
      }

    case NEW_GAME:

      if (action.newGame === true) {
        bounce('none');
        return Object.assign({}, state, { randomNum: Math.floor(Math.random() * 100) + 1, guesses: [], counter: 0, message: '', correct: false });
      }

    case GET_FEWEST_GUESSES:
      action.payload
        .then((res) => {
          let fewest = res.data.fewestGuesses;
          return Object.assign(state, { fewest: fewest });
        })
  }

  return state;
}