import {NavigationBar} from './NavigationBar';
import {Footer} from './Footer';
import styled from 'styled-components';
import {SEO} from '../utils/SEO';

const Main = styled.main`
  background-color: ${({darkTheme, theme}) =>
    darkTheme ? theme.colors.darkBackground : theme.colors.tertiary};
  flex: 1;
`;

/**
 * Rendering of a global layout architecture, present on each page
 * @param {string} title
 * @param {description} description
 * @param {boolean} isDarkTheme
 * @param {object} children
 * @returns {JSX}
 */
export const Layout = ({children, isDarkTheme, title, description}) => {
  return (
    <>
      <SEO title={title} description={description} />
      <NavigationBar />
      <Main darkTheme={isDarkTheme}>{children}</Main>
      <Footer />
    </>
  );
};
