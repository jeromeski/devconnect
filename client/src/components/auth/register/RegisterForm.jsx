import React, { Component } from "react";
import {
  Form,
  Segment,
  Button,
  Checkbox,
  Grid,
  Header,
  Divider,
  Input
} from "semantic-ui-react";
import axios from "axios";
import classnames from "classnames";

class RegisterForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
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
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    axios
      .post("/api/users/register", newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
  };

  handleCheckbox = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked
    }));
  };

  render() {
    const { name, email, password, password2, isChecked, errors } = this.state;

    return (
      <Grid 
        style={{ 
          height: "100vh", 
          backgroundColor: '#1b1c1d' 
        }}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column width={6} />
          <Grid.Column width={5}>
            <Segment vertical>
              <Header 
                inverted 
                textAlign="center"
                style={{fontSize: '3.5rem'}}

              >
                Coders Society
              </Header>
              <Header
                inverted
                textAlign="center"
                size="large"
                style={{ fontWeight: "100", margin: 0 }}>
                Make the most of your professional life
              </Header>
              <Divider></Divider>
              
              <Form size="large" 
                onSubmit={this.handleFormSubmit}
                  
              >
                <Segment
                style={{
                  padding: '2rem',
                  backgroundColor: '#eeeeee'
                }}
                >
                  <Form.Field>
                    <label>Name</label>
                    <Input
                      placeholder="Full Name"
                      name="name"
                      value={name}
                      type="text"
                      onChange={this.handleTitleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Email</label>
                    <Input
                      placeholder="Email"
                      name="email"
                      value={email}
                      type="text"
                      onChange={this.handleTitleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Password</label>
                    <Input
                      placeholder="password"
                      name="password"
                      value={password}
                      type="password"
                      onChange={this.handleTitleChange}
                      error={errors.password !== undefined}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Confirm Password</label>
                    <Input
                      placeholder="confirm password"
                      name="password2"
                      value={password2}
                      type="password"
                      onChange={this.handleTitleChange}
                      error={errors.password2 !== undefined}
                    />
                    {errors.password2 && (
                      <div className="invalid-type">{errors.password2}</div>
                    )}
                  </Form.Field>
                  <Button
                    fluid
                    size="large"
                    color="green"
                    onSubmit={this.handleFormSubmit}
                    style={{fontSize: '14px', padding: '1rem'}}
                    >
                    I AGREE TO THE TERMS & CONDITIONS
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

export default RegisterForm;
