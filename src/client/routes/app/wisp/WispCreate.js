import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CardTitle, CardText, Form } from 'reactstrap';
import { Field, reduxForm, Button, Alert, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';

import { postWisp as create } from './actions';
import WispCreateView from './WispCreateView';

class WispCreate extends Component {
  static propTypes = {
    create: PropTypes.func.isRequired,
    data: PropTypes.object
  }
  render() {
    return <WispCreateView {...this.props} />;
  }
}

export default connect(null, {
  create
})(WispCreate);
