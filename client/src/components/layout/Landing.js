import React from "react";
import { Segment, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="bg">
      <div className="hero">
        <Header inverted as="h1" className="hero_h1">
          Coders Society
        </Header>
        <Header inverted as="h1" className="hero_h2">
          {" "}
          Welcome to the professional community <br></br>
          of Developers and Designers
          {" "}
        </Header>
        <Segment basic textAlign={"center"}>
          <Button 
            positive 
            align="center" 
            content="Sign Up"
            as={Link}
            to='/register'
          />
          <Button 
            content="Log in" 
            as={Link}
            to='/login'
          />
        </Segment>
      </div>
    </div>
  );
};

export default Landing;
