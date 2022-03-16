import React, { Fragment } from "react";
import "./app.scss";
import ControlPanel from "../control-panel";
import UsersList from "../users-list";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import UserPage from "../user-page";

const App = () => {
  return (
    <div className="app-wrapper">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/users-list/1" />
          </Route>
          <Route exact path="/users-list">
            <Redirect to="/users-list/1" />
          </Route>
          <Route
            path="/users-list/:page"
            render={({ match }) => {
              const { page } = match.params;
              return (
                <Fragment>
                  <ControlPanel />
                  <UsersList page={page} />
                </Fragment>
              );
            }}
          />
          <Route
            path="/user/:id"
            render={({ match }) => {
              const { id } = match.params;
              return <UserPage id={id} />;
            }}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
