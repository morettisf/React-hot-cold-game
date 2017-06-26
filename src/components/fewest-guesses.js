import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFewestGuesses } from '../actions/index';
import { guessNum } from '../actions/index';


class FewestGuesses extends Component {

  componentDidMount() {
    this.props.guessNum();
  }

  fewest(number) {
    if (!number) {
      return  <i className="fa slow-spin fa-spinner" aria-hidden="true"></i>
    }

    else {
      return number
    }
  }

  render() {
    return (
      <div id='fewest-guess'>Fewest Guesses: {this.fewest(this.props.fewest)}</div>
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