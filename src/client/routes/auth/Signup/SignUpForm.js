import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Alert } from 'reactstrap';

import RenderField from '../../components/RenderField';

const required = value => (value ? undefined : 'Required');

export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength3 = minLength(3);
export const minLength5 = minLength(5);

const validate = values => {
  const errors = {};

  if (values.password && values.passwordConfirmation && values.password !== values.passwordConfirmation) {
    errors.passwordConfirmation = 'Passwords do not match';
  }
  return errors;
};

const SignUpForm = ({ handleSubmit, submitting, onSubmit, error }) => {
  return (
    <Form name="signup" className="text-left pt-3" onSubmit={handleSubmit(onSubmit)}>
      <Field name="firstName" component={RenderField} type="text" placeholder="First Name" validate={[required, minLength3]} />
      <Field name="lastName" component={RenderField} type="text" placeholder="Last Name" validate={[required, minLength3]} />
      <Field name="email" component={RenderField} type="email" placeholder="Email" validate={required} />
      <Field
        name="password"
        component={RenderField}
        type="password"
        placeholder="Password"
        validate={[required, minLength5]}
      />
      <Field
        name="passwordConfirmation"
        component={RenderField}
        type="password"
        placeholder="Password Confirmation"
        validate={[required, minLength5]}
      />
      <div className="text-center">
        {error && <Alert color="error">{error}</Alert>}
        <Button color="primary" type="submit" disabled={submitting}>
          Register
        </Button>
      </div>
    </Form>
  );
};

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  error: PropTypes.string
};

export default reduxForm({
  form: 'signup',
  validate
})(SignUpForm);
