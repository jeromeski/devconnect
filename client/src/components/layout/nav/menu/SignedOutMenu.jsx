import React from "react";
import { Menu, Button } from "semantic-ui-react";

const SignedOutMenu = ({signIn, register}) => {
  return (
    <Menu.Item position="right">
      <Button 
        basic 
        inverted 
        content="Sign up" 
        style={{ fontSize: "12px" }}
        onClick={register}
    />
      <Button
        basic
        inverted
        content="Log in"
        style={{ marginLeft: "0.5em", fontSize: "12px" }}
        onClick={signIn}
      />
    </Menu.Item>
  );
};

export default SignedOutMenu;
