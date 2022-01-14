import {Layout} from '../components/Layout';
import styled from 'styled-components';
import {AccountItem} from '../components/AccountItem';

const Button = styled.button`
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
`;

const Header = styled.div`
  color: #fff;
  margin-bottom: 2rem;
`;
const Title = styled.h1``;
const SubTitle = styled.h2`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important; /* 2 */
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important; /* 3 */
`;

export const User = () => {
  return (
    <>
      <Layout isDarkTheme={true}>
        <Header>
          <Title>
            Welcome back <br />
            Tony Jarvis!
          </Title>
          <Button>Edit Name</Button>
        </Header>
        <SubTitle class="sr-only">Accounts</SubTitle>
        <AccountItem
          title={'Argent Bank Checking (x8349)'}
          amount={'$2,082.79'}
          amountDetails={'Available Balance'}
        />
        <AccountItem
          title={'Argent Bank Savings (x6712)'}
          amount={'$10,928.42'}
          amountDetails={'Available Balance'}
        />
        <AccountItem
          title={'Argent Bank Credit Card (x8349)'}
          amount={'$184.30'}
          amountDetails={'Current Balance'}
        />
      </Layout>
    </>
  );
};
