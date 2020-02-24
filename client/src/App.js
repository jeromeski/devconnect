import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/nav/Navbar";
import { Route } from "react-router-dom";
import Landing from "./components/layout/Landing";
import LoginForm from "./components/auth/login/LoginForm";
import RegisterForm from "./components/auth/register/RegisterForm";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Route exact to='/' component={Landing} />
      <Route to='/login' component={LoginForm} />
      <Route to='/register' component={RegisterForm} />
    </Fragment>
  );
}

export default App;
