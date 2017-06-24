import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { guessNumber } from '../actions/index';

export class GameInput extends Component {

  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    const number = event.target.number.value;
    this.props.guessNumber(number);
    event.target.number.value = '';
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} >
        <input name='number'
          type='tel'
          placeholder='#' />
        <button id='submit' type='submit'>Submit</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ guessNumber }, dispatch);
}

export default connect(null, mapDispatchToProps)(GameInput);