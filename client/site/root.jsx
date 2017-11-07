// ==================================================
// Root
// ----
// Entry component for hot reloading.
// ==================================================

import React from 'react';
import { Router, hashHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';

import routes from '../routes.jsx';

require('../bem-components/root.less');
require('../../node_modules/font-awesome/css/font-awesome.css');

const Root = () => (
  <Router
    routes={routes}
    history={hashHistory}
    render={applyRouterMiddleware(useScroll())}
  />
);

export default Root;
