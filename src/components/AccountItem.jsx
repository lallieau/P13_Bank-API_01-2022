import styled from 'styled-components';

const Account = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;

  @media (min-width: 720px) {
    flex-direction: row;
  }
`;
const AccountInfos = styled.div`
  width: 100%;
  flex: 1;

  @media (min-width: 720px) {
    // flex: 0;
  }
`;
const AccountTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
`;
const Amount = styled.p`
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`;

const AmountDetails = styled.p`
  margin: 0;
`;

const Button = styled.button`
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 8px;
  display: block;
  width: 100%;
  font-size: 1.1rem;
  margin-top: 1rem;

  @media (min-width: 720px) {
    width: 200px;
  }
`;

export const AccountItem = ({title, amount, amountDetails}) => {
  return (
    <Account>
      <AccountInfos>
        <AccountTitle>{title}</AccountTitle>
        <Amount>{amount}</Amount>
        <AmountDetails>{amountDetails}</AmountDetails>
      </AccountInfos>
      <div class="account-content-wrapper cta">
        <Button>View transactions</Button>
      </div>
    </Account>
  );
};
