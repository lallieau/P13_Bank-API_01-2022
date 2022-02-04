import {fetcher} from '../utils/fetcher';
import {BASE_URL, USER, USER_ROUTES} from '../utils/routes';

/**
 * API calls
 * Fetch data from API with 'email' and 'password' to access 'token' and initiate authentication
 * @param {string} email
 * @param {string} password
 * @returns {object}
 */
export const login = async (email, password) => {
  const response = await fetcher(`${BASE_URL}${USER}${USER_ROUTES.login}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({email, password}),
  });
  return response.json();
};

/**
 * API calls
 * Fetch data from API with retrieved 'token' to access user information
 * @param {string} token
 * @returns {object}
 */
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

/**
 * API calls
 * Fetch data from API with retrieved 'token', 'firstName' and 'lastName' to update the user name
 * @param {string} token
 * @param {string} firstName
 * @param {string} lastName
 * @returns {object}
 */
export const updateUserName = async (token, firstName, lastName) => {
  const response = await fetcher(`${BASE_URL}${USER}${USER_ROUTES.profile}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({firstName, lastName}),
  });

  return response.json();
};
