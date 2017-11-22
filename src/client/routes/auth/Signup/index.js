import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CardTitle, CardText, Form } from 'reactstrap';
import { connect } from 'react-redux';
import { withCookies, Cookies } from 'react-cookie';

import SignUpView from './SignUpView';
import { signup } from '../../../actions';

class SignUp extends Component {
  static propTypes = {
    signup: PropTypes.func.isRequired,
    cookies: PropTypes.any
  };
  componentWillMount() {
    const { cookies } = this.props;
 
  }
  render() {
    return <SignUpView {...this.props} />;
  }
}

export default withCookies(connect(null, {
  signup
})(SignUp));
