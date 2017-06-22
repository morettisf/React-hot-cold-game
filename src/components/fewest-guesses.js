import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFewestGuesses } from '../actions/index';
import { guessNum } from '../actions/index';


class FewestGuesses extends Component {

  componentDidMount() {
    this.props.guessNum();
  }

  displayIf(fewest) {
    if (fewest !== null) {
      return (
        <div id='fewest-guess'>Fewest Guesses: {this.props.fewest}</div>
      )
    }

    else {
      return <div id='fewest-guess'></div>
    }
  }

  render() {
    this.props.guessNum();

    return (
      <div>{this.displayIf(this.props.fewest)}</div>
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

// export default connect(null, mapDispatchToProps)(FewestGuesses);
export default connect(mapStateToProps, mapDispatchToProps)(FewestGuesses);