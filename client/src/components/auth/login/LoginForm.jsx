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
      <Grid
        style={{
          height: "100vh",
          backgroundColor: "#1b1c1d"
        }}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column width={6} />
          <Grid.Column width={4}>
            <Segment vertical>
              <Header inverted textAlign="center" size="huge">
                Welcome Back!
              </Header>
              <Header
                inverted
                textAlign="center"
                size="small"
                style={{
                  fontWeight: "100",
                  margin: 0,
                  letterSpacing: "1px"
                }}>
                Don't miss your next opportunity. &nbsp;Sign in to stay updated
                on your professional world.
              </Header>

              <Divider></Divider>
              <Form size="large" onSubmit={this.handleFormSubmit}>
                <Segment
                  style={{
                    padding: "1rem 2rem 2rem 2rem",
                    backgroundColor: "#eeeeee"
                  }}>
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
                  <Button fluid size="large" color="green">
                    Submit
                  </Button>
                </Segment>
              </Form>
            </Segment>
          </Grid.Column>
          <Grid.Column width={6} />
        </Grid.Row>
      </Grid>
    );
  }
}

export default LoginForm;
