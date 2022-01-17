import {Layout} from '../components/Layout';
import styled from 'styled-components';
import {AccountItem} from '../components/AccountItem';
import {user} from '../mock/mockData';

const Button = styled.button`
  border-color: ${({theme}) => theme.colors.primary};
  background-color: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.tertiary};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  padding: 10px;
`;

const Header = styled.div`
  color: ${({theme}) => theme.colors.tertiary};
  margin-bottom: 2rem;
`;
const Title = styled.h1``;
const SubTitle = styled.h2``;

/**
 * Renders User Account Page  // Tony Jarvis
 * @returns {JSX}
 */
export const User = () => {
  return (
    <>
      <Layout
        isDarkTheme={true}
        title="Argent Bank - Profil"
        description={'Bienvenue sur votre compte Argent Bank'}>
        <Header>
          <Title>
            Welcome back <br />
            {user.firstName} {user.lastName} !
          </Title>
          <Button>Edit Name</Button>
        </Header>
        <SubTitle className="sr-only">Accounts</SubTitle>
        {user.accounts.map((account, index) => {
          return (
            <AccountItem
              key={index}
              title={account.title}
              amount={account.amount}
              amountDetails={account.amountDetails}
            />
          );
        })}
      </Layout>
    </>
  );
};
