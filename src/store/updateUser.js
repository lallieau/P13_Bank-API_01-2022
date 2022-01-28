import {updateUserName} from '../business/users';
import {updateSending, updateSuccess, updateFail} from './store';

export const updateUser = async (store, token, newFirstName, newLastName) => {
  store.dispatch(updateSending());

  try {
    const {
      body: {firstName, lastName},
    } = await updateUserName(token, newFirstName, newLastName);

    store.dispatch(updateSuccess({firstName, lastName}));
  } catch (error) {
    store.dispatch(updateFail());
  }
};
