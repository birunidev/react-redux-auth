import Dashboard from "pages/Dashboard";
import Login from "pages/Login";
import Logout from "pages/Logout";
import NotFound from "pages/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />

          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
