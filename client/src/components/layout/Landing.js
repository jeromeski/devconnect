import React from "react";
import { Segment, Container, Header, Button } from "semantic-ui-react";

const Landing = () => {
  return (
    <div className="bg">
      <div className="hero">
        <Header 
          inverted 
          as="h1" 
          className="hero_h1">
          Coders Society
        </Header>
        <Header inverted as="h1" className="hero_h2">
          {" "}
          Connect with Developers and Designers{" "}
        </Header>
        <Segment basic textAlign={'center'}>
          <Button positive align="center" content="Sign Up" />
          <Button content="Log in" />
        </Segment>
      </div>
    </div>
  );
};

export default Landing;
