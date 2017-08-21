import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './components/layout/index.jsx';
import NotFound from './components/not_found.jsx';
import Resources from './components/resources/index.jsx';

import DesignSystem from './components/index.jsx';

import BrandDesignSystem from './components/brand-design-system/index.jsx';
import BrandWelcome from './components/brand-design-system/welcome/index.jsx';
import BrandTypography from './components/brand-design-system/typography/index.jsx';
import BrandColors from './components/brand-design-system/colors/index.jsx';
import BrandLogo from './components/brand-design-system/logo/index.jsx';

import UIDesignSystem from './components/ui-design-system/index.jsx';
import UIWelcome from './components/ui-design-system/welcome/index.jsx';
//Base Styles
import UIColors from './components/ui-design-system/base-styles/colors/index.jsx';
import UIIcons from './components/ui-design-system/base-styles/icons/index.jsx';
import UITypography from './components/ui-design-system/base-styles/typography/index.jsx';
//Components
import UICode from './components/ui-design-system/components/code/index.jsx';
import UIBanners from './components/ui-design-system/components/banners/index.jsx';
import UIButtons from './components/ui-design-system/components/buttons/index.jsx';
import UIBubbles from './components/ui-design-system/components/bubbles/index.jsx';
import UIForms from './components/ui-design-system/components/forms/index.jsx';
import UILists from './components/ui-design-system/components/lists/index.jsx';
import UITabs from './components/ui-design-system/components/tabs/index.jsx';
import UITables from './components/ui-design-system/components/tables/index.jsx';
import UIUtilities from './components/ui-design-system/components/utilities/index.jsx';
import UIViewModal from './components/ui-design-system/components/view-modal/index.jsx';
//Patterns
import UIModify from './components/ui-design-system/patterns/modify/index.jsx';
//Layouts
import UIGrid from './components/ui-design-system/layouts/grid/index.jsx';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={UIDesignSystem} />
        <Route path="/brand-design-system" component={BrandDesignSystem}>
        <IndexRoute component={BrandWelcome} />
            <Route path="/brand-design-system/typography" component={BrandTypography} />
            <Route path="/brand-design-system/colors" component={BrandColors} />
            <Route path="/brand-design-system/logo" component={BrandLogo} />
        </Route>
        <Route path="/ui-design-system" component={DesignSystem}>
            <IndexRoute component={DesignSystem} />
        </Route>
        <Route path="/ui-design-system" component={UIDesignSystem}>
        <Route path="/ui-design-system/welcome" component={UIWelcome} />
        //Base Styles
        <Route path="/ui-design-system/base-styles/colors" component={UIColors} />
        <Route path="/ui-design-system/base-styles/icons" component={UIIcons} />
        <Route path="/ui-design-system/base-styles/typography" component={UITypography} />
        //Components
        <Route path="/ui-design-system/components/code" component={UICode} />
        <Route path="/ui-design-system/components/banners" component={UIBanners} />
        <Route path="/ui-design-system/components/bubbles" component={UIBubbles} />
        <Route path="/ui-design-system/components/buttons" component={UIButtons} />
        <Route path="/ui-design-system/components/forms" component={UIForms} />
        <Route path="/ui-design-system/components/lists" component={UILists} />
        <Route path="/ui-design-system/components/tabs" component={UITabs} />
        <Route path="/ui-design-system/components/tables" component={UITables} />
        <Route path="/ui-design-system/components/utilities" component={UIUtilities} />
        <Route path="/ui-design-system/components/view-modal" component={UIViewModal} />
        //Patterns
        <Route path="/ui-design-system/patterns/modify" component={UIModify} />
        //Layouts
        <Route path="/ui-design-system/layouts/grid" component={UIGrid} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
