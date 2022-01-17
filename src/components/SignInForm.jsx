import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FormField} from './FormField';

const Form = styled.form``;
const Button = styled(Link)`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: ${({theme}) => theme.fontSize.xs};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  margin-top: 1rem;
  border-color: ${({theme}) => theme.colors.primary};
  background-color: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.tertiary};
`;

/**
 * Renders Sign In Form
 * @returns {JSX}
 */
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
        rememberField
        labelFor={'remember-me'}
        label={'Remember me'}
        inputType={'checkbox'}
        inputId={'remember-me'}
      />
      <Button to="/user">Sign In</Button>
    </Form>
  );
};
