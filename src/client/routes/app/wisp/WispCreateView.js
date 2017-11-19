import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Card, CardHeader, CardBody } from 'reactstrap';
import { SubmissionError } from 'redux-form';

import WispCreateForm from './WispCreateForm';

export default class WispCreateView extends Component {
  onSubmit = create => async values => {
    const result = await create(values);

    if (result.errors) {
      let submitError = {
        _error: 'Login failed!'
      };
      result.errors.map(error => (submitError[error.field] = error.message));
      throw new SubmissionError(submitError);
    }
  };
  render() {
    let { create } = this.props;
    
    const renderMetaData = () => (
      <Helmet
        title='Create Wisp - WiAGate'
        meta={[
          {
            name: 'description',
            content: 'WiAGate - Wisp Create page'
          }
        ]}
      />
    );

    return(
      <div>
        {renderMetaData()}
        <Card className="m-4 " >
        <CardHeader tag="h2" > Create a Wisp </CardHeader>
        <CardBody >
          <WispCreateForm onSubmit={this.onSubmit(create)} />
        </CardBody>
        </Card>        
      </div>
    )
  }
}
