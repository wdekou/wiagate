import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { SubmissionError } from 'redux-form';
import { CardTitle, CardText, Form } from 'reactstrap';

import SignUpForm from './SignUpForm' ;

class SignUpView extends React.PureComponent {
  onSubmit = signup => async values => {
    const result = await signup(values);
    
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
    
    return (
      <div>
        {this.renderMetaData()}
        <CardTitle>Create Your Student Account</CardTitle>
        <CardText> 
          Your student account is your portal to all things Udacity: 
          your classroom, projects, forums, career resources, and more!
        </CardText>
        <SignUpForm onSubmit={this.onSubmit(signup)} />
      </div>
    );
  }
}

SignUpView.propTypes = {
  signup: PropTypes.func.isRequired
};

export default SignUpView;
