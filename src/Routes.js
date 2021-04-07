import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const Home = lazy(() => import("./containers/Home"))
const NotFound = lazy(() => import("./containers/NotFound"))

export default function Routes() {
  return (
    <Suspense fallback={<div>Loading... </div>}>  
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  );
}
