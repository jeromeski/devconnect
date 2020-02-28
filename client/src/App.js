import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/nav/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Landing from "./components/layout/Landing";
import LoginForm from "./components/auth/login/LoginForm";
import RegisterForm from "./components/auth/register/RegisterForm";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <Switch>
      <Route exact path='/login' component={LoginContainer}/>
      <Route exact path='/register' component={RegisterContainer}/>
      <Route component={DefaultContainer}/>
    </Switch>
  );
}

const LoginContainer = () => (
  <div>
    <Route exact path='/' render={() => <Redirect to='/login'/>} />
    <Route path='/login' component={LoginForm}/>
  </div>
)

const RegisterContainer = () => (
  <div>
    <Route exact path='/' render={() => <Redirect to='/register'/>} />
    <Route path='/register' component={RegisterForm}/>
  </div>
)

const DefaultContainer = () => (
  <div>
    <Navbar/>
    <Route path='/' component={Landing}/>
  </div>
)

export default App;

/*
<Fragment>
      <Route exact path='/register' component={RegisterForm} />
      <Route exact path='/login' component={LoginForm} />      
      <Route
        path={'/(.+)'}
        render={() => (
          <Fragment>
              <Navbar />
            <Switch>
              <Route exact path='/' component={Landing} />
            </Switch>
          </Fragment>
        )}
      />
    </Fragment>
*/