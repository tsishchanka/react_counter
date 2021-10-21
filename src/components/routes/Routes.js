import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";

import HomePage from "../pages/HomePage";
import CounterPageContainer from "../pages/CounterPage/containers/CounterPageContainer";
import FunctionalCounterContainer from "../pages/FunctionalCounter/containers/FunctionalCounterContainer";

import {ROUTES} from "./routeNames"

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path={ROUTES.HOME} component={HomePage}/>
        <Route path={ROUTES.COUNTER_PAGE} component={CounterPageContainer}/>
        <Route
          path={ROUTES.FUNCTIONAL_COUNTER}
          component={FunctionalCounterContainer}
        />
        <Redirect path="*" to={ROUTES.HOME} />
      </Switch>
    </div>
  );
};

export default Routes;
