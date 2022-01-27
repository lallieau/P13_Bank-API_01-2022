import {login} from '../../business/users';
import {fetchingToken, resolvedToken, rejectedToken} from '../store';

export const fetchToken = async (store, email, password) => {
  store.dispatch(fetchingToken());

  try {
    const {
      body: {token},
    } = await login(email, password);

    store.dispatch(resolvedToken(token));
  } catch (error) {
    store.dispatch(rejectedToken(error.response.data.message));
  }
};
