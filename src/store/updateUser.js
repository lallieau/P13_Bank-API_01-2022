import {updateUserName} from '../business/users';
import {fetching, updateSuccess, updateFail} from './store';

/**
 * Using retrieved 'token', 'newFirstName' and 'newLastName'
 * Update store with the new user name
 * @param {object} store
 * @param {string} token
 * @param {string} newFirstName
 * @param {string} newLastName
 */
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
