import {login} from '../business/users';
import {fetching, resolvedToken, rejectedToken} from './store';

export const getToken = async (store, email, password) => {
  store.dispatch(fetching());

  try {
    const {
      body: {token},
    } = await login(email, password);

    store.dispatch(resolvedToken(token));
  } catch (error) {
    store.dispatch(rejectedToken(error.response.data.message));
  }
};
