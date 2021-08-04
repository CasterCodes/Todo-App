import { useEffect, useState } from "react";
import firebase from "../firebase";
const useAuthListener = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("todo-user"))
  );

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem("todo-user", JSON.stringify(user));
        setUser(user);
      } else {
        localStorage.removeItem("todo-user");
        setUser(null);
      }
    });
    return () => listener();
  }, []);

  return { user };
};

export default useAuthListener;
