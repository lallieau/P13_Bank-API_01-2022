import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {GlobalStyle} from './utils/style/GlobalStyle';
import {ThemeProvider as StyleComponentThemeProvider} from 'styled-components';
import {theme} from './utils/style/theme';
import {store, persistor} from './store/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

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
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
