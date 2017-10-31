import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './components/layout/index.jsx';
import NotFound from './components/not_found.jsx';
import Resources from './components/resources/index.jsx';

import DesignSystem from './components/index.jsx';

import UIDesignSystem from './components/ui-design-system/index.jsx';
import UIWelcome from './components/ui-design-system/welcome/index.jsx';
import UIPrinciples from './components/ui-design-system/welcome/principles.jsx';
//Base Styles
import UIColors from './components/ui-design-system/base-styles/colors/index.jsx';
import UIIcons from './components/ui-design-system/base-styles/icons/index.jsx';
import UITypography from './components/ui-design-system/base-styles/typography/index.jsx';

//Compass Components
import UIQueryHistory from './components/ui-design-system/compass-components/query-history/index.jsx';

//Components
import UICode from './components/ui-design-system/components/code/index.jsx';
import UIBanners from './components/ui-design-system/components/banners/index.jsx';
import UIButtons from './components/ui-design-system/components/buttons/index.jsx';
import UIButtonsReact from './components/ui-design-system/components/buttons/react-buttons.jsx';
import UIBubbles from './components/ui-design-system/components/bubbles/index.jsx';
import UIForms from './components/ui-design-system/components/forms/index.jsx';
import UILayouts from './components/ui-design-system/components/layouts/index.jsx';
import UILists from './components/ui-design-system/components/lists/index.jsx';
import UITabs from './components/ui-design-system/components/tabs/index.jsx';
import UITabsReact from './components/ui-design-system/components/tabs/react-tabs.jsx';
import UITables from './components/ui-design-system/components/tables/index.jsx';
import UIUtilities from './components/ui-design-system/components/utilities/index.jsx';
import UIViewModal from './components/ui-design-system/components/view-modal/index.jsx';
import UIViewModalReact from './components/ui-design-system/components/view-modal/react-view-modal.jsx';
//Guidelines
import UIGrid from './components/ui-design-system/guidelines/grid/index.jsx';
import UIModify from './components/ui-design-system/guidelines/modify/index.jsx';

const routes = (
  <Route path="/ui-design-system" component={Layout}>
    <IndexRoute component={UIDesignSystem} />
      <Route path="/" component={DesignSystem}>
        <IndexRoute component={DesignSystem} />
      </Route>
      <Route path="/" component={UIDesignSystem}>
      <Route path="/ui-design-system/welcome" component={UIWelcome} />
      <Route path="/ui-design-system/principles" component={UIPrinciples} />
      //Base Styles
      <Route path="/ui-design-system/base-styles/colors" component={UIColors} />
      <Route path="/ui-design-system/base-styles/icons" component={UIIcons} />
      <Route path="/ui-design-system/base-styles/typography" component={UITypography} />
      //Compass Components
      <Route path="/ui-design-system/compass-components/query-history" component={UIQueryHistory} />
      //Components
      <Route path="/ui-design-system/components/code" component={UICode} />
      <Route path="/ui-design-system/components/banners" component={UIBanners} />
      <Route path="/ui-design-system/components/bubbles" component={UIBubbles} />
      <Route path="/ui-design-system/components/buttons" component={UIButtons} />
      <Route path="/ui-design-system/components/buttons/react-buttons" component={UIButtonsReact} />
      <Route path="/ui-design-system/components/forms" component={UIForms} />
      <Route path="/ui-design-system/components/layouts" component={UILayouts} />
      <Route path="/ui-design-system/components/lists" component={UILists} />
      <Route path="/ui-design-system/components/tabs" component={UITabs} />
      <Route path="/ui-design-system/components/tabs/react-tabs" component={UITabsReact} />
      <Route path="/ui-design-system/components/tables" component={UITables} />
      <Route path="/ui-design-system/components/utilities" component={UIUtilities} />
      <Route path="/ui-design-system/components/view-modal" component={UIViewModal} />
      <Route path="/ui-design-system/components/view-modal/react-view-modal" component={UIViewModalReact} />
      //Guidelines
      <Route path="/ui-design-system/guidelines/grid" component={UIGrid} />
      <Route path="/ui-design-system/guidelines/modify" component={UIModify} />
      //Misc
      <Route path="/resources" component={Resources} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
