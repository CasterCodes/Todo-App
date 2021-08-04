import {
  GET_TODOS,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_ERROR,
  SIGNOUT_USER,
} from "./constants";

export default (state, action) => {
  switch (action.type) {
    case REGISTER_ERROR:
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        registered: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        signedIn: true,
      };
    case SIGNOUT_USER:
      return {
        ...state,
        signOut: true,
      };
    case SIGNOUT_ERROR:
      return {
        ...state,
        error: action.paylaod,
      };
    default:
      return state;
  }
};
