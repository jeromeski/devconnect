import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/nav/Navbar";
import { Route } from "react-router-dom";
import Landing from "./components/layout/Landing";
import LoginForm from "./components/auth/login/LoginForm";
import RegisterForm from "./components/auth/register/RegisterForm";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Route exact path='/' component={Landing} />
      
      <Container>
        <Route path='/register' component={RegisterForm} />
        <Route path='/login' component={LoginForm} />
      </Container>
    </Fragment>
  );
}

export default App;
