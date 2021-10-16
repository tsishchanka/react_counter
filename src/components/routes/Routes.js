import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import HomePage from "../pages/HomePage";
import {ROUTES} from "./routeNames"
import CounterPageContainer from "../pages/CounterPage/containers/CounterPageContainer";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path={ROUTES.HOME} component={HomePage}/>
        <Route exact path={ROUTES.COUNTER_PAGE} component={CounterPageContainer}/>
      </Switch>
    </div>
  );
};

export default Routes;
