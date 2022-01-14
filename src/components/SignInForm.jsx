import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FormField} from './FormField';

const Form = styled.form``;
const Button = styled(Link)`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
`;
export const SignInForm = () => {
  return (
    <Form>
      <FormField
        labelFor={'username'}
        label={'Username'}
        inputType={'text'}
        inputId={'username'}
      />
      <FormField
        labelFor={'password'}
        label={'Password'}
        inputType={'password'}
        inputId={'password'}
      />
      <FormField
        className="rememberField"
        labelFor={'remember-me'}
        label={'Remember me'}
        inputType={'checkbox'}
        inputId={'remember-me'}
      />
      <Button to="/user">Sign In</Button>
    </Form>
  );
};
