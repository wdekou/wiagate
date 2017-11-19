import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { CardTitle, CardText, Form } from 'reactstrap';
import { Field, reduxForm, Button, Alert, SubmissionError } from 'redux-form';

import LoginForm from './LoginForm';

export default class LoginView extends PureComponent {
  static propTypes = {
    login: PropTypes.func.isRequired,
    //error: PropTypes.string
  }
  onSubmit = login => async values => {
    const result = await login(values);

    if (result.errors) {
      let submitError = {
        _error: 'Login failed!'
      };
      result.errors.map(error => (submitError[error.field] = error.message));
      throw new SubmissionError(submitError);
    }
  };
  render() {
    let { login } = this.props;

    const renderMetaData = () => (
      <Helmet
        title='WISP Name - Login'
        meta={[
          {
            name: 'description',
            content: 'WISP Name - Login page'
          }
        ]}
      />
    );

    return (
      <div>
        {renderMetaData()}
        <CardTitle>Log Into Your Account</CardTitle>
        <CardText> 
          Your student account is your portal to all things Udacity: 
          your classroom, projects, forums, career resources, and more!
        </CardText>
        <LoginForm onSubmit={this.onSubmit(login)} />
      </div>
    );
  }
}
