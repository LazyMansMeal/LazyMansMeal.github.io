import ServiceClient from '../api/ServiceClient';

export const TOKEN_EXPIRED = 'TOKEN_EXPIRED';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
function loginRequest(username) {
  return {
    type: LOGIN_REQUEST
  }
}
export const LOGIN_RESULT = 'LOGIN_RESULT';
function loginResult(accessToken, refreshToken) {
  return {
    type: LOGIN_RESULT,
    accessToken,
    refreshToken,
    redirectTo: '/'
  }
}

export function login(username, password) {
  return async (dispatch, getState) => {
    const serviceClient = new ServiceClient();
    dispatch(loginRequest(username));
    try {
      let result = await serviceClient.login(username, password);
      dispatch(loginResult(result.accessToken, result.refreshToken));
    }
    catch (e) {
      console.log(e);
    }
  }
}

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
function registerRequest(username) {
  return {
    type: REGISTER_REQUEST
  }
}
export const REGISTER_RESULT = 'REGISTER_RESULT';
function registerResult(accessToken, refreshToken) {
  return {
    type: REGISTER_RESULT,
    accessToken,
    refreshToken,
    redirectTo: '/'
  }
}

export function register(username, password, fullName) {
  return async (dispatch) => {
    const serviceClient = new ServiceClient();
    dispatch(registerRequest(username));
    try {
      let result = await serviceClient.register(username, password, fullName);
      dispatch(registerResult(result.accessToken, result.refreshToken));
    }
    catch (e) {
      console.log(e);
    }
  }
}

export const LOGOUT = "LOGOUT"
export function logout() {
  return {
    type: LOGOUT
  }
}