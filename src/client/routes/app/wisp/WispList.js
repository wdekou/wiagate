import React, { Component } from 'react';
import { connect } from 'react-redux';

class WispList extends Component {
  render() {
    return(
      <div >
        Hello Wisp 1
      </div>
    )
  }
}

export default connect()(WispList);
