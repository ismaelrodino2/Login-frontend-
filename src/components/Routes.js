import { Switch, Router, Route } from "react-router";

import { Login } from "../pages/login/index";
import { Register } from "../pages/register";
import { Home } from "../pages/home";
import { NotFound } from "./NotFound";
import { PrivateRoute } from "./PrivateRoute";

import { history } from "../history";

export default function Routes() {
  return(
  <Router history={history}>
    <Switch>
      <Route component={Login} exact path="/login" />
      <Route component={Register} exact path="/register" />
      <PrivateRoute component={Home} exact path="/" />
      <PrivateRoute component={NotFound} />
    </Switch>
  </Router>
  )
}
