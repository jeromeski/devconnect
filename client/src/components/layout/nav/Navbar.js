import React, { Component } from "react";
import { Menu, Container } from "semantic-ui-react";
import SignedOutMenu from "./menu/SignedOutMenu";
import SignedInMenu from "./menu/SignedInMenu";

class Navbar extends Component {

  state = {
    isAuth: true
  }

  render() {
    const {isAuth} = this.state
    return (
      <Menu inverted className='navbar' fixed='top' >
        <Container>
          <Menu.Item header>CodersSociety</Menu.Item>
          <Menu.Item name="Coders" />
          <Menu.Item name="Designers" />
          {isAuth ? <SignedInMenu/> : <SignedOutMenu/> }
          
        </Container>
      </Menu>
    );
  }
}

export default Navbar;
