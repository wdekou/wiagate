import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { Button, Card, CardText, CardBody, CardHeader, CardTitle, NavLink, NavItem, Nav } from 'reactstrap';
import { connect } from 'react-redux';

import PageLayout from '../../common/components/PageLayout';
import Signup from './Signup';
import Login from './Login';
import './Index.scss';

const styles = {
  container: {
    align: "center"
  },
  card: {
    
  },
  header: {
    backgroundColor: "#f4f4f4"
  },
  nav: {
    width: "100%"
  }
}

class Auth extends Component {
  tabClasses= (route) => {
    let { pathname } = this.props;
    if( pathname == route) return "col-md active";
    
    return "col-md"
  }
  render() {
    return (
      <PageLayout>
        <div id="auth">
          <div className="auth-main col-xs-12 col-md-6 mx-auto">
          <Card className="m-4 " >
            <CardHeader style={styles.header} tag="h3">
            <Nav style={styles.nav}>
              <NavItem className={this.tabClasses("/auth/signup") + " signup"} >
                <NavLink tag="span">
                  <Link to="/auth/signup" className="nav-link text-center">Sign Up</Link>
                </NavLink>
              </NavItem>
              <NavItem className={this.tabClasses("/auth/login")} >
                <NavLink tag="span">
                  <Link className="nav-link text-center" to="/auth/login" >Login</Link>
                </NavLink>
              </NavItem>
            </Nav>
            </CardHeader>
            <CardBody className="text-center pt-3">
            <Switch >
              <Route exact path="/auth/login" component={Login} />
              <Route exact path="/auth/signup" component={Signup} />
              <Redirect from='/auth' to="/auth/login" />              
            </Switch>
            </CardBody>
          </Card>
          </div>
        </div>
      </PageLayout>
    );
  }
}

export default connect((state) => ( state.router.location ))(Auth)
