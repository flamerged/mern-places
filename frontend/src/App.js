import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.scss";

import Home from "./pages/home/Home";
import NewPlace from "./pages/places/NewPlace";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header></Header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/places/new" component={NewPlace} />
          <Redirect to="/" /> {/* Could be replaced with 404 page later */}
        </Switch>
      </main>
    </Router>
  );
};

export default App;
