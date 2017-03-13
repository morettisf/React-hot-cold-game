import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { guessNumber } from '../actions/index';

export class GameInput extends Component {

  constructor(props) {
    super(props);

    this.state = { guess: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ guess: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.guessNumber(this.state.guess);
    this.setState({ guess: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input 
          type='text' 
          value={this.state.guess} 
          onChange={this.onInputChange}
          placeholder='Your guess here' />
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ guessNumber }, dispatch);
}

export default connect(null, mapDispatchToProps)(GameInput);