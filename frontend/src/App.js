import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.scss";

import Home from "./pages/home/Home";
import NewPlace from "./pages/places/NewPlace";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/places/new" component={NewPlace} />
        <Redirect to="/" /> {/* Could be replaced with 404 page later */}
      </Switch>
    </Router>
  );
};

export default App;
