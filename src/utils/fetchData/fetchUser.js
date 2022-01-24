import {createSlice} from '@reduxjs/toolkit';

export const fetchUser = async (store, token) => {
  store.dispatch(fetching());
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {Authorization: `Bearer ${token}`},
      body: {},
    });
    const user = await response.data.body;
    store.dispatch(resolved(user));
  } catch (error) {
    store.dispatch(rejected(error.response.data.message));
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: false,
    user: {},
    isError: '',
  },
  reducers: {
    fetching: draft => {
      draft.isLoading = true;
    },
    resolved: (draft, action) => {
      draft.isLoading = false;
      draft.user = action.payload;
      draft.isError = '';
    },
    rejected: (draft, action) => {
      draft.isLoading = false;
      draft.user = {};
      draft.isError = action.payload;
    },
  },
});

export const {fetching, resolved, rejected} = userSlice.actions;
export default userSlice.reducer;
