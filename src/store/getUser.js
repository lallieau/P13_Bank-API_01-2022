import {userProfile} from '../business/users';
import {fetching, resolvedUser, rejectedUser} from './store';

export const getUser = async (store, token) => {
  store.dispatch(fetching());

  try {
    const {
      body: {firstName, lastName},
    } = await userProfile(token);

    store.dispatch(resolvedUser({firstName, lastName}));
  } catch (error) {
    store.dispatch(rejectedUser(error.response.data.message));
  }
};
