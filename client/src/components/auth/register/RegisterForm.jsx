import React, { Component } from "react";
import {
  Form,
  Segment,
  Button,
  Checkbox,
  Grid,
  Header,
  Divider
} from "semantic-ui-react";

class RegisterForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: '',
    isChecked: false,
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

  handleCheckbox = ()=> {
    this.setState((prevState) => ({
      isChecked: !prevState.isChecked
    }))
  }

  render() {

    const {name, email, password, password2, isChecked} = this.state

    return (
      <Grid style={{ height: "100vh" }}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column width={5} />
          <Grid.Column width={6}>
            <Segment vertical>
              <Header 
                textAlign="center" 
                size="large"                
              >
                Don't have an account yet?
              </Header>
              <Header 
                textAlign="center" 
                size="medium"
                style={{fontWeight: '100', margin: 0}}
              >
                Make the most of your professional life
              </Header>
              <Divider></Divider>
              <Header textAlign="center" size="small">
                Sign up with your email & password
              </Header>
              <Form size="large" onSubmit={this.handleFormSubmit}>
                <Segment>
                  <Form.Field>
                    <label>Name</label>
                    <input
                      placeholder="Full Name"
                      name="name"
                      value={name}
                      onChange={this.handleTitleChange}
                    />
                  </Form.Field>
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
                      type='password'
                      onChange={this.handleTitleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Confirm Password</label>
                    <input placeholder="confirm password"
                      name='password2' 
                      value={password2}
                      type='password'
                      onChange={this.handleTitleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Checkbox onChange={this.handleCheckbox} label="I agree to the Terms and Conditions" />
                  </Form.Field>
                  <Button
                    fluid
                    size="large"
                    color="green"
                    disabled={
                      !name || !email || !password || !password2 || !isChecked ? true : false 
                    }
                    >
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

export default RegisterForm;



