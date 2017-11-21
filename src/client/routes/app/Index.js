import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import AppLayout from '../../common/components/AppLayout';
import WispList from './wisp/WispList';
import WispCreate from './wisp/WispCreate';
import Wisp from './wisp/Index';
import { getWisps } from './wisp/actions';

class App extends Component {
  componentDidMount(){
    this.authAndLoadData();
  }
  
  async authAndLoadData() {
    const { history: { replace }, isLoggedIn, getWisps } = this.props;
    if (!isLoggedIn) {
      replace({
        pathname: '/auth/login'
      });
      return;
    }
    const result = await getWisps();
  }

  render() {
    return(
      <AppLayout>
        <Switch>
          <Route path="/app/wisps/create" component={WispCreate} />
          <Route path="/app/wisps/:slug" component={Wisp} />
          <Route path="/app/wisps" component={WispList} exact />  
          <Redirect from='/app' to="/app/wisps" />
        </Switch>
      </AppLayout>
    )
  }
}

export default connect((state) => ({isLoggedIn: !!state.token}), {
  getWisps
})(App);
