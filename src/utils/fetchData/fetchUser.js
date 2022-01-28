import {userProfile} from '../../business/users';
import {fetchingUser, resolvedUser, rejectedUser} from '../store';

export const fetchUser = async (store, token) => {
  store.dispatch(fetchingUser());

  try {
    const {
      body: {firstName, lastName},
    } = await userProfile(token);

    store.dispatch(resolvedUser({firstName, lastName}));
  } catch (error) {
    store.dispatch(rejectedUser(error.response.data.message));
  }
};
