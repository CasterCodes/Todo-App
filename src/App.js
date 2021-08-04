import TodoState from "./context/TodoState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./component/Navbar";
import { Login, Signup, Todo, Todos, About, AddTodo } from "./pages";
import { IsLoggedIn, ProtectedRoutes } from "./helpers/routes";
import useAuthListener from "./hooks/auth-listener";

function App() {
  const { user } = useAuthListener();
  return (
    <TodoState>
      <Router>
        <Navbar />
        <Switch>
          <IsLoggedIn user={user} loggedInPath="/" exact path="/signup">
            <Signup />
          </IsLoggedIn>
          <IsLoggedIn user={user} loggedInPath="/" exact path="/login">
            <Login />
          </IsLoggedIn>
          <ProtectedRoutes user={user} exact path="/">
            <Todos />
          </ProtectedRoutes>
          <ProtectedRoutes user={user} exact path="/todo/:id">
            <Todo />
          </ProtectedRoutes>
          <ProtectedRoutes user={user} exact path="/add-todo">
            <AddTodo />
          </ProtectedRoutes>
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </TodoState>
  );
}

export default App;
