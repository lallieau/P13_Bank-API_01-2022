import {fetcher} from '../utils/fetcher';
import {BASE_URL, USER, USER_ROUTES} from '../utils/routes';

export const login = async (email, password) => {
  const response = await fetcher(`${BASE_URL}${USER}${USER_ROUTES.login}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({email, password}),
  });

  return response.json();
};

export const userProfile = async token => {
  const response = await fetcher(`${BASE_URL}${USER}${USER_ROUTES.profile}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({}),
  });
  return response.json();
};
