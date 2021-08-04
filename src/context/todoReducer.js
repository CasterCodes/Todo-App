import { GET_TODOS, REGISTER_ERROR } from "./constants";

export default (state, action) => {
  switch (action.type) {
    case REGISTER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
