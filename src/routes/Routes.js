import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "../components/pages/HomePage";
import CounterPageContainer from "../components/pages/CounterPage/containers/CounterPageContainer";
import FunctionalCounterContainer from "../components/pages/FunctionalCounter/containers/FunctionalCounterContainer";

import { ROUTES } from "./routeNames";
import MainCounterPageContainer from "../components/pages/MainCounterPage/containers/MainCounterPageContainer";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.COUNTER_PAGE} component={CounterPageContainer} />
        <Route
          path={ROUTES.FUNCTIONAL_COUNTER}
          component={FunctionalCounterContainer}
        />
        <Route
          path={ROUTES.MAIN_COUNTER}
          component={MainCounterPageContainer}
        />

        <Redirect path="*" to={ROUTES.HOME} />
      </Switch>
    </div>
  );
};

export default Routes;
