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
  font-size: ${({theme}) => theme.fontSize.lg};
`;
const Title = styled.h1``;

/**
 * Renders Sign In page
 * @returns {JSX}
 */
export const SignIn = () => {
  return (
    <Layout
      isDarkTheme={true}
      title="Argent Bank - Sign In"
      description={'Connectez-vous à votre compte Argent Bank'}>
      <SignInContent>
        <SignInIcon className="fa fa-user-circle" />
        <Title>Sign In</Title>
        <SignInForm />
      </SignInContent>
    </Layout>
  );
};
