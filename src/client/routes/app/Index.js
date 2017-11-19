import React, { Component } from 'react';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import AppLayout from '../../common/components/AppLayout';
import WispList from './wisp/WispList';
import WispCreate from './wisp/WispCreate';
import Wisp from './wisp/Index';

class App extends Component {
  componentWillMount(){
    this.requireAuth();
  }
  
  requireAuth() {
    const { replace, isLoggedIn } = this.props;
    if (!isLoggedIn) {
      replace({
        pathname: '/auth/login'
      })
    }
  }
  render() {
    return(
      <AppLayout>
        <Switch>
          <Route exact path="/app/wisps" component={WispList} />  
          <Route path="/app/wisps/create" component={WispCreate} />
          <Route path="/app/wisps/:slug" component={Wisp} />
          <Redirect from='/app' to="/app/wisps" />
        </Switch>
      </AppLayout>
    )
  }
}

export default connect((state) => ({isLoggedIn: !!state.token}), {
  replace
})(App);
