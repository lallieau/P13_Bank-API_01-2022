import {configureStore} from '@reduxjs/toolkit';
import userReducer from './fetchData/fetchUser';
import tokenReducer from './fetchData/fetchToken';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    user: userReducer,
  },
});
