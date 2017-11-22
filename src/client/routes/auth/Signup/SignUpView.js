import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { SubmissionError } from 'redux-form';
import { CardTitle, CardText, Form } from 'reactstrap';
import { withCookies, Cookies } from 'react-cookie';

import SignUpForm from './SignUpForm' ;


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


class SignUpView extends Component {
  state = {
    location: window.location
  }; 
  onSubmit = signup => async values => {
    console.log(this.props)
    getParameterByName(this.state.location)
    
    const result = await signup(values, urlParams);
    
    if (result.errors) {
      let submitError = {
        _error: 'Registration failed!'
      };
      result.errors.map(error => (submitError[error.field] = error.message));
      throw new SubmissionError(submitError);
    }
  };

  renderMetaData = () => (
    <Helmet
      title='WISP Name - Register'
      meta={[
        {
          name: 'description',
          content: `WISP Name - Register page`
        }
      ]}
    />
  );

  render() {
    const { signup } = this.props;
    console.log(this.props)
    
    return (
      <div>
        {this.renderMetaData()}
        <CardTitle>Create Your Student Account</CardTitle>
        <CardText> 
          Create an account today to get access to you Wireless Internet 
          Service Provider Connection, and more!
        </CardText>
        <SignUpForm onSubmit={this.onSubmit(signup)} />
      </div>
    );
  }
}

SignUpView.propTypes = {
  signup: PropTypes.func.isRequired
};

export default withCookies(SignUpView);
