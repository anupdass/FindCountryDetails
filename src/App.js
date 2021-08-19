import Home from "./components/Home/Home";
import "tailwindcss/tailwind.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CountryDetails from "./components/CountryDetails/CountryDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/country/:name">
          <CountryDetails></CountryDetails>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
