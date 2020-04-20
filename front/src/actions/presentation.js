export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

export const fetchUsers = () => ({
  type: FETCH_USERS,
});

export const fetchUsersSuccess = (payload) => ({
  type: FETCH_USERS_SUCCESS,
  payload,
});

export const fetchUsersError = () => ({
  type: FETCH_USERS_ERROR,
});