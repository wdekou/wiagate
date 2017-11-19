import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CardTitle, CardText, Button, Form } from 'reactstrap';
import { Field, reduxForm, Alert, SubmissionError } from 'redux-form';

import RenderField from '../../components/RenderField';

const required = value => (value ? undefined : 'Required');

const WispCreateForm = ({ handleSubmit, submitting, onSubmit }) => {
  return (
    <Form name="post" onSubmit={handleSubmit(onSubmit)}>
      <Field name="name" component={RenderField} type="text" label="Name" validate={required} />
      <Field name="slug" component={RenderField} type="text" label="Slug"  validate={required} />
      <Field name="welcomeMessage" component={RenderField} type="textarea" rows="5" label="Welecome Message" validate={required} />
      <Button color="primary" type="submit" disabled={submitting}>
        Save
      </Button>
    </Form>
  );
};

WispCreateForm.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
  submitting: PropTypes.bool
};

export default reduxForm({
  form: 'wisps',
  // enableReinitialize: true
})(WispCreateForm);
