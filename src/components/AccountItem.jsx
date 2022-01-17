import styled from 'styled-components';

const Account = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: ${({theme}) => theme.colors.tertiary};
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
  font-size: ${({theme}) => theme.fontSize.xs};
  font-weight: ${({theme}) => theme.fontWeight.regular};
`;
const Amount = styled.p`
  margin: 0;
  font-size: ${({theme}) => theme.fontSize.md};
  font-weight: ${({theme}) => theme.fontWeight.bold};
`;

const AmountDetails = styled.p`
  margin: 0;
`;

const Button = styled.button`
  border-color: ${({theme}) => theme.colors.primary};
  background-color: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.tertiary};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  padding: 8px;
  display: block;
  width: 100%;
  font-size: ${({theme}) => theme.fontSize.xs};
  margin-top: 1rem;

  @media (min-width: 720px) {
    width: 200px;
  }
`;

/**
 * Renders transaction information on User Page
 * @param {string} title
 * @param {string} amount
 * @param {string} amountDetails
 * @returns {JSX}
 */
export const AccountItem = ({title, amount, amountDetails}) => {
  return (
    <Account>
      <AccountInfos>
        <AccountTitle>{title}</AccountTitle>
        <Amount>{amount}</Amount>
        <AmountDetails>{amountDetails}</AmountDetails>
      </AccountInfos>
      <Button>View transactions</Button>
    </Account>
  );
};
