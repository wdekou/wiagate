import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Auth from './auth/Index';
import Home from './Home';
import App from './app/Index'

class Routes extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={Auth}  />
          <Route path="/app" component={App} />
        </Switch>
    )
  }
}

export default connect()(Routes);
