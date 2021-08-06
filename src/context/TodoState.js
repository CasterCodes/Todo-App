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
  ADD_TODO_REQUEST,
  ADD_TODO_ERROR,
  GET_TODO_ERROR,
  GET_TODO,
  DELETE_TODO,
  DELETE_ERROR,
  UPDATE_TODO,
  UPDATE_ERROR,
} from "./constants";

const TodoState = ({ children }) => {
  const initialState = {
    user: localStorage.getItem("todo-user")
      ? JSON.parse(localStorage.getItem("todo-user"))
      : {},
    todos: [],
    todo: {},
    loading: true,
    error: null,
    registered: false,
    signedIn: false,
    signOut: false,
    addSuccess: false,
    deleteSuccess: false,
    updateSuccess: false,
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

  const addTodo = (data) => {
    firebase
      .firestore()
      .collection("todos")
      .add(data)
      .then(() => dispatch({ type: ADD_TODO_REQUEST }))
      .catch((error) =>
        dispatch({ type: ADD_TODO_ERROR, payload: error.message })
      );
  };

  const getTodos = (id) => {
    firebase
      .firestore()
      .collection("todos")
      .onSnapshot((snap) => {
        const data = snap.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .filter((doc) => doc.user === id);
        dispatch({ type: GET_TODOS, payload: data });
      });
  };

  const getSingleTodo = (id) => {
    firebase
      .firestore()
      .collection("todos")
      .doc(id)
      .get()
      .then((doc) => {
        if (!doc.exists)
          dispatch({
            type: GET_TODO_ERROR,
            payload: "Document with that id was not found",
          });

        dispatch({ type: GET_TODO, payload: doc.data() });
      })
      .catch((error) =>
        dispatch({ type: GET_TODO_ERROR, payload: error.message })
      );
  };

  const deleteTodo = (id) => {
    firebase
      .firestore()
      .collection("todos")
      .doc(id)
      .delete()
      .then(() => dispatch({ type: DELETE_TODO, payload: id }))
      .catch((error) =>
        dispatch({ type: DELETE_ERROR, payload: error.message })
      );
  };

  const updateTodo = (id, data) => {
    firebase
      .firestore()
      .collection("todos")
      .doc(id)
      .update(data)
      .then(() => dispatch({ type: UPDATE_TODO }))
      .catch((error) =>
        dispatch({ type: UPDATE_ERROR, payload: error.message })
      );
  };

  const resetBoolenState = () => {
    dispatch({ type: "RESET_STATE" });
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
        addSuccess: state.addSuccess,
        todo: state.todo,
        deleteSuccess: state.deleteSuccess,
        updateSuccess: state.updateSuccess,
        registerUser,
        LoginUser,
        signout,
        addTodo,
        getTodos,
        getSingleTodo,
        deleteTodo,
        resetBoolenState,
        updateTodo,
      }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;
