import React, { Component } from 'react';
import { connect } from 'react-redux';

export class FireAndIce extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      fireAnimate: '',
      iceAnimate: ''
    }

  }

  componentWillMount() {

    setTimeout(() => {
      this.animate1();

      setTimeout(() => {
         this.animate2();

        setTimeout(() => {
           this.animate3();
        }, 250)

      }, 0)

    }, this.props.wait);

  }

  animate1() {
    this.setState({ 
      fireAnimate: 'fire-move-in',
      iceAnimate: 'ice-move-in'
    });
  }

  animate2() {
    this.setState({ 
      fireAnimate: 'fire-move-in bounce-right-once'
    });
  }

  animate3() {
    this.setState({ 
      iceAnimate: 'ice-move-in bounce-left-once'
    });

    setTimeout(() => {
      this.setState({ 
        fireAnimate: 'fire-move-in',
        iceAnimate: 'ice-move-in'
      });
    }, 1000)

  }

  render() {
    return (
      <div id='characters-wrapper'>
        <div id='fire-wrapper' className={this.state.fireAnimate} >
          <img src='../images/fire.svg' />
        </div>
        <div id='ice-wrapper' className={this.state.iceAnimate} >
          <img src='../images/ice.svg' />
        </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    message: state.message
  }
}

export default connect(mapStateToProps)(FireAndIce)