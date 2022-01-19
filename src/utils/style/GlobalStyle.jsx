import {createGlobalStyle} from 'styled-components';

/**
 * CSS Global styles for the site using styled.components
 */
export const GlobalStyle = createGlobalStyle`
html {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: ${({theme}) => theme.colors.text};
  }
  
  body, #root {
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .sr-only {
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
  }`;
