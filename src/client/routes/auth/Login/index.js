import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CardTitle, CardText, Form } from 'reactstrap';
import { Field, reduxForm, Button, Alert, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';

import { login } from '../../../actions';
import LoginView from './LoginView';

class Login extends React.Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    data: PropTypes.object
  }
  render() {
    return <LoginView {...this.props} />;
  }
}

export default connect(null, {
  login
})(Login);
