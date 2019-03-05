import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.scss";

import * as container from "./containers/indexContainers";
import Layout from "./components/Layout/Layout";

class App extends Component {
  render() {
    const loadingApp = this.props.loadingApp;

    // public routes
    let publicRoutes = [
      { path: "/news", component: container.News },
      { path: "/top-stories", exact: true, component: container.TopStories },
      { path: "/:id/comments", component: container.Comments }
    ];

    let routes = [...publicRoutes];

    let redirection = <Redirect to={"/news"} />;

    const appMarkup = (
      <Layout>
        <Switch>
          {/* List all the routes user is able to access to */}
          {routes.map((route, index) => (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.component}
              key={index}
            />
          ))}

          {/* Redirect if some path is not undefined */}
          {redirection}
        </Switch>
      </Layout>
    );
    return (
      <React.Fragment>
        {loadingApp ? (
          <h1 style={{ padding: "20px" }}>Loading...</h1>
        ) : (
          appMarkup
        )}
      </React.Fragment>
    );
  }
}

export default withRouter(App);
