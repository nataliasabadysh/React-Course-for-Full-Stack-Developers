import React, { lazy, Suspense } from "react";

const AsyncHome = lazy(() => import("./HomePage"));

// const AsyncHome = lazy(() =>
//   import('./AsyncHome.js' /* webpackChunkName: "home-view" */),
// );

const App = () => (
  <Suspense fallback={<h1>Loading ...</h1>}>
    <Switch>
      <Route path="/" exact component={AsyncHome} />
    </Switch>
  </Suspense>
);
