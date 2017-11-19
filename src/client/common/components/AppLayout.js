import React, { Component } from 'react';
import { connect } from 'react-redux';

import PageLayout from './PageLayout';

class AppLayout extends Component {
  render() {
    return (<PageLayout {...this.props} />)
  }
}

export default connect()(AppLayout);
