import {updateUserName} from '../business/users';
import {fetching, updateSuccess, updateFail} from './store';

export const updateUser = async (store, token, newFirstName, newLastName) => {
  store.dispatch(fetching());

  try {
    const {
      body: {firstName, lastName},
    } = await updateUserName(token, newFirstName, newLastName);

    store.dispatch(updateSuccess({firstName, lastName}));
  } catch (error) {
    store.dispatch(updateFail());
  }
};
