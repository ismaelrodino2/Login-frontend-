import { Route, Redirect } from "react-router";

export function PrivateRoute(props) {
  const isLogged = !!localStorage.getItem("app-token");
  return isLogged ?  <Route {...props}/> : <Redirect to="/login"/>;
}
