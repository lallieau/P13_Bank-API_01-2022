import {userProfile} from '../../business/users';
import {fetchingUser, resolvedUser, rejectedUser} from '../store';

export const fetchUser = async (store, token) => {
  store.dispatch(fetchingUser());

  try {
    const {
      body: {user},
    } = await userProfile(token);

    store.dispatch(resolvedUser(user));
  } catch (error) {
    store.dispatch(rejectedUser(error.response.data.message));
  }
};
