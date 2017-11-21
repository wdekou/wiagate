import React, { Component } from 'react';
import { connect } from 'react-redux';

class Wisp extends Component {
  render() {
    const { match, wisp } = this.props;
    console.log(this.props)
    return(
      <div>
        Hello Wisp {wisp.name}
      </div>
    )
  }
}

export default connect(
  state => ({
    wisp: state.wisps.wisp,
    wisps: state.wisps.wisps
  })
)(Wisp);
