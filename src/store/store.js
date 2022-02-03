import {configureStore, createSlice} from '@reduxjs/toolkit';

const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    isLoading: false,
    isLoggedIn: false,
    token: null,
    isError: '',
  },
  // () => {
  // let draft = {
  //   isLoading: false,
  //   isLoggedIn: false,
  //   isError: '',
  // };
  // draft.token = localStorage.getItem('token');
  // if (draft.token) {
  //   draft.isLoggedIn = true;
  // }
  // return draft;
  // },
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
    isUpdated: false,
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
    resetUser: draft => {
      draft.isLoading = false;
      draft.isUpdated = false;
      draft.user = {};
      draft.isError = '';
    },
    updateSending: draft => {
      draft.isLoading = true;
    },
    updateSuccess: (draft, action) => {
      draft.isLoading = false;
      draft.isUpdated = true;
      draft.user = action.payload;
      draft.isError = '';
    },
    updateFail: draft => {
      draft.isLoading = false;
      draft.isUpdated = false;
    },
  },
});

export const {fetchingToken, resolvedToken, rejectedToken, resetToken} =
  tokenSlice.actions;

export const {
  fetchingUser,
  resolvedUser,
  rejectedUser,
  resetUser,
  updateSending,
  updateSuccess,
  updateFail,
} = userSlice.actions;

export const store = configureStore({
  reducer: {
    token: tokenSlice.reducer,
    user: userSlice.reducer,
  },
});

export const selectToken = state => state.token;
export const selectUser = state => state.user;
