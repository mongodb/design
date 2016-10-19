import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './components/layout/index.jsx';
import NotFound from './components/not_found.jsx';
import Resources from './components/resources/index.jsx';

import DesignSystem from './components/design-system/index.jsx';
import DSWelcome from './components/design-system/welcome/index.jsx';
import DSTypography from './components/design-system/typography/index.jsx';
import DSColors from './components/design-system/colors/index.jsx';
import DSButtons from './components/design-system/buttons/index.jsx';
import DSForms from './components/design-system/forms/index.jsx';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Resources} />
    <Route path="/design-system" component={DesignSystem}>
    	<IndexRoute component={DSWelcome} />
    	<Route path="/design-system/typography" component={DSTypography} />
    	<Route path="/design-system/colors" component={DSColors} />
    	<Route path="/design-system/buttons" component={DSButtons} />
    	<Route path="/design-system/forms" component={DSForms} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
