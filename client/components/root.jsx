// ==================================================
// Root
// ----
// Entry component for hot reloading.
// ==================================================

import React from 'react';
import { Router, hashHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';

import routes from '../routes.jsx';

const Root = () => (
  <Router
    routes={routes}
    history={hashHistory}
    render={applyRouterMiddleware(useScroll())}
  />
);

export default Root;
