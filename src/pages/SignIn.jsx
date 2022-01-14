import styled from 'styled-components';
import {Layout} from '../components/Layout';
import {SignInForm} from '../components/SignInForm';

const SignInContent = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem;
`;

const SignInIcon = styled.i`
  // font-size: 5rem;
`;
const Title = styled.h1``;

export const SignIn = () => {
  return (
    <Layout isDarkTheme={true}>
      <SignInContent>
        <SignInIcon className="fa fa-user-circle" />
        <Title>Sign In</Title>
        <SignInForm />
      </SignInContent>
    </Layout>
  );
};
