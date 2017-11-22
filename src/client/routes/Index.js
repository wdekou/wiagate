import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Auth from './auth/Index';
import Home from './Home';
import App from './app/Index'

const styles = {
  center: {
    position: "fixed", /* or absolute */
    top: "48%",
    left: "42%"
  }
}

const Welcome = () => (
  <h1 style={styles.center} >You are Welcome</h1>
)

class Routes extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/wifidog/gw_message.php" component={Welcome} />
          <Route path="/wifidog" component={Auth}  />
          <Route path="/app" component={App} />
        </Switch>
    )
  }
}

export default connect()(Routes);
