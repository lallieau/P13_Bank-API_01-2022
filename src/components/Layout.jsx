import {NavigationBar} from './NavigationBar';
import {Footer} from './Footer';
import styled from 'styled-components';

const DarkMain = styled.main`
  flex: 1;
  background-color: #12002b;
`;

export const Layout = ({children, isDarkTheme}) => {
  return (
    <>
      <NavigationBar />
      {isDarkTheme ? <DarkMain>{children}</DarkMain> : children}
      <Footer />
    </>
  );
};
