import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';

// import logo from '../../logo.svg';

const style = {
  brand: {
    fontSize: '35px',
  },
  navbar: {
    backgroundColor: "#ffffff",
    zIndex: 1,
    borderBotton: "1px solid red"
  }
}

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar fixed="top" style={style.navbar} light expand="md">
        <Container>
          
          <NavbarBrand style={style.brand}  >WISP Name</NavbarBrand>
          
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag="span">
                  <Link activeClassName="active" className="nav-link" to="/auth/login" > Login </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag="span">
                  <Link activeClassName="active" to="/auth/signup" className="nav-link">Sign Up</Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
