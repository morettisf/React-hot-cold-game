import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFewestGuesses } from '../actions/index';
import { guessNum } from '../actions/index';


export class FewestGuesses extends Component {
  componentDidMount(event) {
    this.props.guessNum();
  }

  render() {
    return (
      <div id='fewest-guess'>Fewest Guesses: {this.props.fewest}</div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    fewest: state.fewest
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ guessNum }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FewestGuesses);