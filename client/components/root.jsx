// ==================================================
// Root
// ----
// Entry component for hot reloading.
// ==================================================

import React from 'react';
import { Router, hashHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';

import routes from '../routes.jsx';

require('../styling/root.less');
require('../../node_modules/font-awesome/less/font-awesome.less');

const Root = () => (
  <Router
    routes={routes}
    history={hashHistory}
    render={applyRouterMiddleware(useScroll())}
  />
);

export default Root;
