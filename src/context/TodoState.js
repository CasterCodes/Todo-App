import React, { useReducer } from "react";
import TodoContext from "./todoContext";
import todoReducer from "./todoReducer";
import firebase from "../firebase";
import {
  GET_TODOS,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_ERROR,
  SIGNOUT_USER,
} from "./constants";

const TodoState = ({ children }) => {
  const initialState = {
    user: localStorage.getItem("todo-user")
      ? JSON.parse(localStorage.getItem("todo-user"))
      : {},
    todos: [],

    loading: true,
    error: null,
    registered: false,
    signedIn: false,
    signOut: false,
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const registerUser = (name, email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({
          displayName: name,
        });
      })
      .then(() => dispatch({ type: REGISTER_SUCCESS }))
      .catch((error) => {
        console.log(error.message);
        dispatch({ type: REGISTER_ERROR, payload: error.message });
      });
  };

  const LoginUser = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => dispatch({ type: LOGIN_SUCCESS }))
      .catch((error) =>
        dispatch({ type: LOGIN_ERROR, payload: error.message })
      );
  };

  const signout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => dispatch({ type: SIGNOUT_USER }))
      .catch((error) =>
        dispatch({ type: SIGNOUT_ERROR, payload: error.message })
      );
  };
  return (
    <TodoContext.Provider
      value={{
        user: state.user,
        todos: state.todos,
        loading: state.loading,
        error: state.error,
        registered: state.registered,
        signedIn: state.signedIn,
        signOut: state.signOut,
        registerUser,
        LoginUser,
        signout,
      }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;
