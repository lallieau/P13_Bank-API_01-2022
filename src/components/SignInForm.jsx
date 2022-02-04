import styled from 'styled-components';
import {useState, useEffect} from 'react';
import {useSelector, useStore} from 'react-redux';
import {selectAuth} from '../store/store';
import {getToken} from '../store/getToken';
import {LoadingIcon} from './LoaderIcon';
import {Error} from '../pages/Error';

const Form = styled.form``;
const Button = styled.button`
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

const Field = styled.div`
  display: flex;
  flex-direction: ${({theme}) => theme.inputDirection.default};
  text-align: left;
  margin-bottom: 1rem;
`;
const Label = styled.label`
  font-weight: ${({theme}) => theme.fontWeight.bold};
`;
const Input = styled.input`
  padding: 5px;
  font-size: ${({theme}) => theme.fontSize.sm};
`;

/**
 * Renders Sign In Form
 * @returns {JSX}
 */
export const SignInForm = () => {
  const {isLoading, isError} = useSelector(selectAuth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  const store = useStore();

  useEffect(() => {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const user = rememberMe ? localStorage.getItem('user') : '';

    setEmail(user);
    setRememberMe(rememberMe);
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    localStorage.setItem('rememberMe', rememberMe);
    localStorage.setItem('user', rememberMe ? email : '');

    getToken(store, email, password);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
          disabled={isLoading ? true : false}
        />
      </Field>

      <Field>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          onChange={e => {
            setPassword(e.target.value);
          }}
          disabled={isLoading ? true : false}
        />
      </Field>

      <Field theme={{inputDirection: 'row'}}>
        <Input
          type="checkbox"
          id="remember-me"
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
        />
        <Label
          htmlFor="remember-me"
          style={{
            marginLeft: '0.25rem',
            fontWeight: ({theme}) => theme.fontWeight.regular,
          }}>
          Remember me
        </Label>
      </Field>
      {isLoading && <LoadingIcon />}
      {isError && <Error />}
      <Button type="submit" disabled={isLoading ? true : false}>
        Sign In
      </Button>
    </Form>
  );
};
