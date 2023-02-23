import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "pages/Login";
import Jobs from "pages/Jobs";
import ProtectedRoute from "./ProtectedRoute";

const Routes = () => {
  return (
    <div className="routes-wrapper">
      <Switch>
        <Route path="/login" exact component={Login} />
        <ProtectedRoute>
          <Route path="/" exact component={Jobs} />
        </ProtectedRoute>
        {/* 404 page - DO NOT CHANGE LOCATION */}
        <Route path="*" status={404} />
      </Switch>
    </div>
  );
};

export default Routes;
