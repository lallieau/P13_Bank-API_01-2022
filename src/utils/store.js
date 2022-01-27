import {configureStore, createSlice} from '@reduxjs/toolkit';

const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    isLoading: false,
    isLoggedIn: false,
    token: null,
    isError: '',
  },
  reducers: {
    fetchingToken: draft => {
      draft.isLoading = true;
    },
    resolvedToken: (draft, action) => {
      draft.isLoading = false;
      draft.isLoggedIn = true;
      draft.token = action.payload;
      draft.isError = '';
    },
    rejectedToken: (draft, action) => {
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

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: false,
    user: {},
    isError: '',
  },
  reducers: {
    fetchingUser: draft => {
      draft.isLoading = true;
    },
    resolvedUser: (draft, action) => {
      draft.isLoading = false;
      draft.user = action.payload;
      draft.isError = '';
    },
    rejectedUser: (draft, action) => {
      draft.isLoading = false;
      draft.user = {};
      draft.isError = action.payload;
    },
  },
});

export const {fetchingToken, resolvedToken, rejectedToken, resetToken} =
  tokenSlice.actions;
// export const tokenReducer = tokenSlice.reducer;
export const {fetchingUser, resolvedUser, rejectedUser} = userSlice.actions;
// export const userReducer = userSlice.reducer;
export const store = configureStore({
  reducer: {
    token: tokenSlice.reducer,
    user: userSlice.reducer,
  },
});

export const selectToken = state => state.token;
export const selectUser = state => state.user;
