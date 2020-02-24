import React from 'react';
import { Form, Segment, Button, Input } from 'semantic-ui-react';
// import { Field } from 'redux-form';
// import TextInput from '../../../app/common/form/TextInput';

const LoginForm = () => {
  return (
    <Form error size="large">
      <Segment>
        <Input
          name="email"
          // component={TextInput}
          type="text"
          placeholder="Email Address"
        />
        <Input
          name="password"
          // component={TextInput}
          type="password"
          placeholder="password"
        />
        <Button fluid size="large" color="teal">
          Login
        </Button>
      </Segment>
    </Form>
  );
};

export default LoginForm;