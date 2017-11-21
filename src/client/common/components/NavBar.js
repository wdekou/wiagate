import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import { connect } from 'react-redux';

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

class NavBar extends Component {
  constructor(props) {
    super(props);

    //this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { isLoggedIn } = this.props;
    return (
      <Navbar fixed="top" style={style.navbar} light expand="md">
        <Container>
        { !isLoggedIn ?
          <NavbarBrand style={style.brand} tag="a" href='/'  >WISP Name</NavbarBrand>
          :
          <NavbarBrand style={style.brand} tag="a" href='/' >WiAGate</NavbarBrand>
        }          
          
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            { !isLoggedIn ?
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
            :
            <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag="span">
                <Link activeClassName="active" className="nav-link" to="/app/wisps" > My Wisps </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag="span">
                <Link activeClassName="active" to="/auth/logout" className="nav-link">Logout</Link>
              </NavLink>
            </NavItem>
          </Nav>

            }
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default connect((state) => ({isLoggedIn: !!state.token}) )(NavBar);
