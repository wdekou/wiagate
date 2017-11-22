import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { CardTitle, CardText, Form } from 'reactstrap';
import { Field, reduxForm, Button, Alert, SubmissionError } from 'redux-form';
import { withCookies, Cookies } from 'react-cookie';

import LoginForm from './LoginForm';

let urlParams = {};

const getParameterByName = (location) => {
  var match,
  pl     = /\+/g,  // Regex for replacing addition symbol with a space
  search = /([^&=]+)=?([^&]*)/g,
  decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
  query  = location.search.substring(1);

  urlParams = {};
  while (match = search.exec(query))
  urlParams[decode(match[1])] = decode(match[2]);
}

class LoginView extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    cookies: PropTypes.any
    //error: PropTypes.string
  }
  state = {
    location: window.location
  };  
  onSubmit = login => async values => {
    getParameterByName(this.state.location)
    
    const result = await login(values, urlParams);

    if (result.errors) {
      let submitError = {
        _error: 'Login failed!'
      };
      result.errors.map(error => (submitError[error.field] = error.message));
      throw new SubmissionError(submitError);
    }
  };
  render() {
    console.log(this.props)
    
    let { login } = this.props;

    const renderMetaData = () => (
      <Helmet
        title='WiAGate - Login'
        meta={[
          {
            name: 'description',
            content: 'WiAGate - Login page'
          }
        ]}
      />
    );

    return (
      <div>
        {renderMetaData()}
        <CardTitle>Login or Register Into Your Account</CardTitle>
        <CardText> 
          You need to login or register before getting access to the must fast Internet 
          connection without limit.
        </CardText>
        <LoginForm onSubmit={this.onSubmit(login)} />
      </div>
    );
  }
}

export default withCookies(LoginView);
