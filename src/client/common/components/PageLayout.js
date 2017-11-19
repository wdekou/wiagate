import React, { Component } from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';

import NavBar from './NavBar';
import Footer from './Footer';

const styles = {
  section: {
    padding: 0,
    margin: 0
  },
  container: {
    paddingTop: "5.2rem"
  }
}

export default class PageLayout extends Component {
  static propTypes = {
    navBar: PropTypes.bool,
    children: PropTypes.node
  }

  render(){
    let {
      navBar,
      children
    } = this.props;
    return (
      <section style={styles.section}>
        {navBar !== false && <NavBar />}
        <Container style={styles.container} > {children } </Container>
        <Footer />
      </section>
    );
  }
}
