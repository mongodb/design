import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './components/layout/index.jsx';
import NotFound from './components/not_found.jsx';
import Resources from './components/resources/index.jsx';

import BrandDesignSystem from './components/brand-design-system/index.jsx';
import BrandWelcome from './components/brand-design-system/welcome/index.jsx';
import BrandTypography from './components/brand-design-system/typography/index.jsx';
import BrandColors from './components/brand-design-system/colors/index.jsx';
import BrandLogo from './components/brand-design-system/logo/index.jsx';

import UIDesignSystem from './components/ui-design-system/index.jsx';
import UIWelcome from './components/ui-design-system/welcome/index.jsx';
import UITypography from './components/ui-design-system/typography/index.jsx';
import UIColors from './components/ui-design-system/colors/index.jsx';
import UIButtons from './components/ui-design-system/buttons/index.jsx';
import UIForms from './components/ui-design-system/forms/index.jsx';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Resources} />
    <Route path="/brand-design-system" component={BrandDesignSystem}>
        <IndexRoute component={BrandWelcome} />
        <Route path="/brand-design-system/typography" component={BrandTypography} />
        <Route path="/brand-design-system/colors" component={BrandColors} />
        <Route path="/brand-design-system/logo" component={BrandLogo} />
    </Route>
    <Route path="/ui-design-system" component={UIDesignSystem}>
        <IndexRoute component={UIWelcome} />
        <Route path="/ui-design-system/typography" component={UITypography} />
        <Route path="/ui-design-system/colors" component={UIColors} />
        <Route path="/ui-design-system/buttons" component={UIButtons} />
        <Route path="/ui-design-system/forms" component={UIForms} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
