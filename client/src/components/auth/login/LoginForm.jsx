import React, { Component } from "react";
import {
  Form,
  Segment,
  Button,
  Grid,
  Header,
  Divider
} from "semantic-ui-react";
// import { Field } from 'redux-form';
// import TextInput from '../../../app/common/form/TextInput';

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    errors: {}

  };

  handleTitleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = evt => {
    evt.preventDefault();
    console.log(this.state);
  };
  render() {
    const { email, password } = this.state;
    return (
      <Grid style={{ height: "100vh" }}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column width={5} />
          <Grid.Column width={6}>
            <Segment vertical>
              <Header textAlign="center" size="large">
                Welcome Back!
              </Header>
              <Header textAlign="center" size="medium" style={{
                fontWeight: '100', margin: 0
              }}>
                Don't miss your next opportunity. Sign in to stay updated on your professional world.
              </Header>

              <Divider></Divider>
              <Header textAlign="center" size="small">
                Enter your email & password
              </Header>
              <Form size="large" onSubmit={this.handleFormSubmit}>
                <Segment>
                  <Form.Field>
                    <label>Email</label>
                    <input
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={this.handleTitleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Password</label>
                    <input
                      placeholder="password"
                      name="password"
                      value={password}
                      type="password"
                      onChange={this.handleTitleChange}
                    />
                  </Form.Field>
                  <Button
                    fluid
                    size="large"
                    color="green"
                    disabled={!email || !password}>
                    Submit
                  </Button>
                </Segment>
              </Form>
            </Segment>
          </Grid.Column>
          <Grid.Column width={5} />
        </Grid.Row>
      </Grid>
    );
  }
}

export default LoginForm;
