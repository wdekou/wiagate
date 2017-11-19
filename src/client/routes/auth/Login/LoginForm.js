import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CardTitle, CardText, Button, Form } from 'reactstrap';
import { Field, reduxForm, Alert, SubmissionError } from 'redux-form';
import { NavLink, Link } from 'react-router-dom';

import RenderField from '../../components/RenderField';

const required = value => (value ? undefined : 'Required');

const LoginForm = ({ handleSubmit, submitting, onSubmit, error }) => {
  return (
    <Form className="text-left pt-3"  onSubmit={handleSubmit(onSubmit)}>
      <Field name="email" component={RenderField} type="email" placeholder="Email" validate={required} />
      <Field name="password" component={RenderField} type="password" placeholder="Password" validate={required} />
      {error && <Alert color="error">{error}</Alert>}
      <div className="text-center">
        <Button color="primary" size="lg" type="submit" disabled={submitting}>
          Login
        </Button>
      </div>
      <Link className="text-center" to="/auth/forgot-password">
        Forgot your password?
      </Link>
      <hr />
      <div>
        <span style={{ lineHeight: '58px' }}>Not registered yet?</span>
        <NavLink className="btn btn-secondary" to="/auth/signup" activeClassName="active" style={{ margin: 10 }}>
          Sign Up
        </NavLink>
      </div>
    </Form>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  error: PropTypes.string
};

export default reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm)
