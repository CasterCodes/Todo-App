import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./component/Navbar";
import { Login, Signup, Todo, Todos, About, AddTodo } from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Todos} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/todo/:id" component={Todo} />
        <Route exact path="/add-todo" component={AddTodo} />
      </Switch>
    </Router>
  );
}

export default App;
