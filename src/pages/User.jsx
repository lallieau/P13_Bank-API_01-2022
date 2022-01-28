import {Layout} from '../components/Layout';
import styled from 'styled-components';
import {AccountItem} from '../components/AccountItem';
import {accounts} from '../mock/mockData';
import {useSelector, useStore} from 'react-redux';
import {selectToken, selectUser} from '../utils/store';
import {fetchUser} from '../utils/fetchData/fetchUser';
import {useEffect, useState} from 'react';
import {Navigate} from 'react-router-dom';
import {LoadingIcon} from '../components/LoaderIcon';
import {updateUser} from '../utils/fetchData/updateUser';

const Button = styled.button`
  border-color: ${({theme}) => theme.colors.primary};
  background-color: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.tertiary};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  padding: 12px;
  margin: 0.5rem;
`;

const Header = styled.div`
  color: ${({theme}) => theme.colors.tertiary};
  margin-bottom: 2rem;
`;
const Title = styled.h1`
  margin: 1rem;
`;
const SubTitle = styled.h2``;
const Form = styled.form`
  display: flex;
  // flex-direction: column;
  justify-content: center;
`;
const Field = styled.div`
  display: flex;
  flex-direction: ${({theme}) => theme.inputDirection.default};
  text-align: left;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
`;
const Label = styled.label`
  font-weight: ${({theme}) => theme.fontWeight.bold};
  font-size: ${({theme}) => theme.fontSize.xs};
`;
const Input = styled.input`
  padding: 5px;
  font-size: ${({theme}) => theme.fontSize.sm};
`;

/**
 * Renders User Account Page  // Tony Jarvis
 * @returns {JSX}
 */
export const User = () => {
  const {isLoggedIn, token} = useSelector(selectToken);
  const {isLoading, isError, user} = useSelector(selectUser);
  const store = useStore();
  // local states
  const [newFirstName, setNewFirstName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [canEdit, setCanEdit] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [inputOk, setInputOk] = useState(false);

  useEffect(() => {
    fetchUser(store, token);
  }, [store, token]);

  const handleSubmit = async event => {
    event.preventDefault();
    setInputOk(false);
    setSubmitted(true);
    if (newFirstName.trim() !== '' && newLastName.trim() !== '') {
      await updateUser(store, token, newFirstName, newLastName);
      setInputOk(true);
      setCanEdit(false);
    }
  };

  if (!isLoggedIn) return <Navigate to="/" />;

  return (
    <>
      <Layout
        isDarkTheme={true}
        title="Argent Bank - Profil"
        description={'Bienvenue sur votre compte Argent Bank'}>
        <Header>
          {canEdit ? (
            <>
              <Title>
                Please edit your name <br />
                <Form onSubmit={handleSubmit}>
                  <Field>
                    <Label htmlFor="firstName">FirstName</Label>
                    <Input
                      type="text"
                      id="firstName"
                      onChange={e => {
                        setNewFirstName(e.target.value);
                      }}
                      disabled={isLoading ? true : false}
                    />
                  </Field>
                  <Field>
                    <Label htmlFor="lastName">LastName</Label>
                    <Input
                      type="text"
                      id="lastName"
                      onChange={e => {
                        setNewLastName(e.target.value);
                      }}
                      disabled={isLoading ? true : false}
                    />
                  </Field>
                  {submitted && !inputOk && (
                    <p delay="2000">Please enter your full name.</p>
                  )}
                  <Button type="submit" disabled={isLoading ? true : false}>
                    Save
                  </Button>
                  <Button
                    type="button"
                    onClick={() => {
                      setCanEdit(false);
                    }}>
                    Cancel
                  </Button>
                </Form>
              </Title>
            </>
          ) : (
            <>
              <Title>
                Welcome back <br />
                {user.firstName} {user.lastName} !
              </Title>
              <Button
                onClick={() => {
                  setCanEdit(true);
                }}>
                Edit Name
              </Button>
            </>
          )}
        </Header>
        <SubTitle className="sr-only">Accounts</SubTitle>
        {accounts.map((account, index) => {
          return (
            <AccountItem
              key={index}
              title={account.title}
              amount={account.amount}
              amountDetails={account.amountDetails}
            />
          );
        })}
        {isLoading && <LoadingIcon />}
        <p>{isError}</p>
      </Layout>
    </>
  );
};
