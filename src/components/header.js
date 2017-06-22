import React, { Component } from 'react';

export default class Header extends Component {

  constructor(props) {
    super(props);

    this.state = { show: '' };
  }

  componentWillMount() {

    setTimeout(() => {
      this.show();
    }, this.props.wait);

  }

  show() {
    this.setState({ show: 'show' });
  }

  render() {
    return (
      <div id='header' className={this.state.show} >
        <h1>Hot or Cold?</h1>
        <h2>Guess the correct number between&nbsp;1&nbsp;-&nbsp;100</h2>
      </div>
    )
  }
}