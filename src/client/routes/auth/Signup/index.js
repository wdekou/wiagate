import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CardTitle, CardText, Form } from 'reactstrap';
import { connect } from 'react-redux';

import SignUpView from './SignUpView';
import { signup } from '../../../actions';

class SignUp extends Component {
  static propTypes = {
    signup: PropTypes.func.isRequired
  };
  render() {
    return <SignUpView {...this.props} />;
  }
}

export default connect(null, {
  signup
})(SignUp);
