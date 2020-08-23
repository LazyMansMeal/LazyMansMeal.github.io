import { LOGIN_RESULT, REGISTER_RESULT, TOKEN_EXPIRED, LOGOUT } from '../actions';

// initialState
export const auth = {
  accessToken: '',
  refreshToken: '',
  redirectTo: null
}

export default function authReducer(state = auth, action) {
  switch (action.type) {
    case REGISTER_RESULT:
      return Object.assign({}, state, {
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        redirectTo: action.redirectTo
      })
    case LOGIN_RESULT:
      return Object.assign({}, state, {
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        redirectTo: action.redirectTo
      })
    case TOKEN_EXPIRED:
      return auth;
    case LOGOUT:
      return auth;
    default:
      return state;
  }
}
