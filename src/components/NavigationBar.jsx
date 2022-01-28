import {useSelector, useDispatch} from 'react-redux';
import {selectToken} from '../store/store';
import {resetToken, resetUser} from '../store/store';

import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/argentBankLogo.png';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`;

const NavLinkLogo = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: ${({theme}) => theme.fontWeight.bold};
  color: ${({theme}) => theme.colors.text};
`;

const NavLinkItem = styled(Link)`
  text-decoration: none;
  margin-right: 0.5rem;
  font-weight: ${({theme}) => theme.fontWeight.bold};
  color: ${({theme}) => theme.colors.text};

  &:hover {
    text-decoration: underline;
  }

  &:active {
    color: ${({theme}) => theme.colors.activeLink};
  }
`;

const Image = styled.img`
  max-width: 100%;
  width: 200px;
`;

const Title = styled.h1``;

const Icon = styled.i`
  margin-right: 0.5rem;
`;

/**
 * Renders the Header Navigation Bar
 * @returns {JSX}
 */
export const NavigationBar = () => {
  const isLoggedIn = useSelector(selectToken).isLoggedIn;
  const dispatch = useDispatch();
  return (
    <Nav>
      <NavLinkLogo to="/">
        <Image src={logo} alt="logo Argent Bank"></Image>
        <Title className="sr-only">Argent Bank</Title>
      </NavLinkLogo>
      {isLoggedIn ? (
        <NavLinkItem
          to="/"
          onClick={() => {
            dispatch(resetUser());
            dispatch(resetToken());
          }}>
          <Icon className="fa fa-user-circle" />
          Logout
        </NavLinkItem>
      ) : (
        <NavLinkItem to="/login">
          <Icon className="fa fa-user-circle" />
          Sign In
        </NavLinkItem>
      )}
    </Nav>
  );
};
