import {createSlice} from '@reduxjs/toolkit';

export const fetchToken = async (store, email, password) => {
  store.dispatch(fetching());
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      body: {email, password},
    });
    const token = await response.data.body.token;
    store.dispatch(resolved(token));
  } catch (error) {
    store.dispatch(rejected(error.response.data.message));
  }
};

const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    isLoading: false,
    isLoggedIn: false,
    token: null,
    isError: '',
  },
  reducers: {
    fetching: draft => {
      draft.isLoading = true;
    },
    resolved: (draft, action) => {
      draft.isLoading = false;
      draft.isLoggedIn = true;
      draft.token = action.payload;
      draft.isError = '';
    },
    rejected: (draft, action) => {
      draft.isLoading = false;
      draft.isLoggedIn = false;
      draft.token = null;
      draft.isError = action.payload;
    },
    resetToken: draft => {
      draft.isLoading = false;
      draft.isLoggedIn = false;
      draft.token = null;
      draft.isError = '';
    },
  },
});

export const {fetching, resolved, rejected, resetToken} = tokenSlice.actions;
export default tokenSlice.reducer;
