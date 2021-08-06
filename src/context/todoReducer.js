import {
  GET_TODOS,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_ERROR,
  SIGNOUT_USER,
  ADD_TODO_REQUEST,
  ADD_TODO_ERROR,
  GET_TODO_ERROR,
  GET_TODO,
  DELETE_TODO,
  DELETE_ERROR,
  UPDATE_TODO,
  UPDATE_ERROR,
} from "./constants";

export default (state, action) => {
  switch (action.type) {
    case "RESET_STATE":
      return {
        ...state,
        signOut: false,
        addSuccess: false,
        deleteSuccess: false,
        updateSuccess: false,
      };
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
    case ADD_TODO_REQUEST:
      return {
        ...state,
        addSuccess: true,
      };
    case ADD_TODO_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case GET_TODO:
      return {
        ...state,
        todo: action.payload,
      };
    case GET_TODO_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        deleteSuccess: true,
      };
    case DELETE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_TODO:
      return {
        ...state,
        updateSuccess: true,
      };
    case UPDATE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
