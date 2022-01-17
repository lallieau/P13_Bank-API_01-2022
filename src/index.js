import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {GlobalStyle} from './utils/style/GlobalStyle';
import {ThemeProvider as StyleComponentThemeProvider} from 'styled-components';
import {theme} from './utils/style/theme';

const ThemeProvider = ({children, theme}) => {
  return (
    <StyleComponentThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </StyleComponentThemeProvider>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
