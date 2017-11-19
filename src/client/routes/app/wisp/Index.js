import React, { Component } from 'react';
import { connect } from 'react-redux';

class Wisp extends Component {
  render() {
    return(
      <div>
        Hello Wisp
      </div>
    )
  }
}

export default connect()(Wisp);
