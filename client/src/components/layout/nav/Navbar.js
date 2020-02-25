import React, { Component } from "react";
import { Menu, Container } from "semantic-ui-react";
import SignedOutMenu from "./menu/SignedOutMenu";
import SignedInMenu from "./menu/SignedInMenu";
import { NavLink, withRouter } from "react-router-dom";

class Navbar extends Component {

  state = {
    isAuth: false
  }

  handleSignIn = () => {
    this.props.history.push('/login')
  }

  handleSignOut = () => {
    this.setState({
      isAuth: false
    })
    this.props.history.push('/')
  }

  handleRegister = () => {
    this.props.history.push('/register')
  }

  render() {
    const {isAuth} = this.state
    return (
      <Menu inverted className='navbar' fixed='top' >
        <Container>
          <Menu.Item as={NavLink} to='/' header exact>CodersSociety</Menu.Item>
          <Menu.Item as={NavLink} to='/profiles1' name="Coders" />
          <Menu.Item as={NavLink} to='/profiles2' name="Designers" />
          {isAuth ? 
            <SignedInMenu signOut={this.handleSignOut}/> : <SignedOutMenu signIn={this.handleSignIn} register={this.handleRegister}/> }     
        </Container>
      </Menu>
    );
  }
}

export default withRouter(Navbar);
