import React from "react";
import { Form, Segment, Button, Input } from "semantic-ui-react";
// import { Field } from "redux-form";
// import TextInput from "app/common/form/TextInput";

const RegisterForm = () => {
  return (
    <div>
      <Form size="large">
        <Segment>
          <Input
            name="displayName"
            type="text"
            // component={TextInput}
            placeholder="Known As"
          />
          <Input
            name="email"
            type="text"
            // component={TextInput}
            placeholder="Email"
          />
          <Input
            name="password"
            type="password"
            // component={TextInput}
            placeholder="Password"
          />
          <Button fluid size="large" color="teal">
            Register
          </Button>
        </Segment>
      </Form>
    </div>
  );
};

export default RegisterForm;
