import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './site/layout/index.jsx';
import NotFound from './site/not_found.jsx';
import Resources from './site/ui-design-system/resources/index.jsx';

import DesignSystem from './site/index.jsx';

import UIDesignSystem from './site/ui-design-system/index.jsx';
import UIWelcome from './site/ui-design-system/welcome/index.jsx';
import UIPrinciples from './site/ui-design-system/welcome/principles.jsx';

// Brand
import BrandGuidelines from './site/ui-design-system/brand/BrandGuidelines.jsx';
import WebsiteGuidelines from './site/ui-design-system/brand/WebsiteGuidelines.jsx';

//Base Styles
import BaseStylesIndex from './site/ui-design-system/base-styles/index.jsx';
import UIColors from './site/ui-design-system/base-styles/colors/index.jsx';
import UIIcons from './site/ui-design-system/base-styles/icons/index.jsx';
import UITypography from './site/ui-design-system/base-styles/typography/index.jsx';

//Compass Components
import CompassIndex from './site/ui-design-system/compass-components/index.jsx';
import UIQueryHistory from './site/ui-design-system/compass-components/query-history/index.jsx';

//Components
import ComponentsIndex from './site/ui-design-system/components/index.jsx';
import UIBanners from './site/ui-design-system/components/banners/index.jsx';
import UIBannersReact from './site/ui-design-system/components/banners/react-banners.jsx';
import UIButtons from './site/ui-design-system/components/buttons/index.jsx';
import UIButtonsReact from './site/ui-design-system/components/buttons/react-buttons.jsx';
import UICode from './site/ui-design-system/components/code/index.jsx';
import UICopyableCommandReact from './site/ui-design-system/components/code/react-copyablecommand.jsx';
import UIBubbles from './site/ui-design-system/components/bubbles/index.jsx';
import UIForms from './site/ui-design-system/components/forms/index.jsx';
import UIRichForms from './site/ui-design-system/components/rich-forms/index.jsx';
import UILayouts from './site/ui-design-system/components/layouts/index.jsx';
import UILayoutsReact from './site/ui-design-system/components/layouts/react-layouts.jsx';
import UILists from './site/ui-design-system/components/lists/index.jsx';
import UITabs from './site/ui-design-system/components/tabs/index.jsx';
import UITabsReact from './site/ui-design-system/components/tabs/react-tabs.jsx';
import UITables from './site/ui-design-system/components/tables/index.jsx';
import UITablesReact from './site/ui-design-system/components/tables/react-tables.jsx';
import UIViewModal from './site/ui-design-system/components/view-modal/index.jsx';
import UIViewModalReact from './site/ui-design-system/components/view-modal/react-view-modal.jsx';

//Guidelines
import GuidelinesIndex from './site/ui-design-system/guidelines/index.jsx';
import UIGrid from './site/ui-design-system/guidelines/grid/index.jsx';
import UIModify from './site/ui-design-system/guidelines/modify/index.jsx';

const routes = (
  <Route path="/ui-design-system" component={Layout}>
    <IndexRoute component={UIDesignSystem} />
      <Route path="/" component={DesignSystem}>
        <IndexRoute component={DesignSystem} />
      </Route>

      <Route path="/" component={UIDesignSystem}>
      <Route path="/ui-design-system/welcome" component={UIWelcome} />
      <Route path="/ui-design-system/principles" component={UIPrinciples} />

      // Brand
      <Route path="/ui-design-system/brand/brand-guidelines" component={BrandGuidelines} />
      <Route path="/ui-design-system/brand/website-guidelines" component={WebsiteGuidelines} />

      //Base Styles
      <Route path="/ui-design-system/base-styles" component={BaseStylesIndex} />
      <Route path="/ui-design-system/base-styles/colors" component={UIColors} />
      <Route path="/ui-design-system/base-styles/icons" component={UIIcons} />
      <Route path="/ui-design-system/base-styles/typography" component={UITypography} />

      //Compass Components
      <Route path="/ui-design-system/compass-components" component={CompassIndex} />
      <Route path="/ui-design-system/compass-components/query-history" component={UIQueryHistory} />

      //Components
      <Route path="/ui-design-system/components" component={ComponentsIndex} />
      <Route path="/ui-design-system/components/code" component={UICode} />
      <Route path="/ui-design-system/components/code/react-copyablecommand" component={UICopyableCommandReact} />
      <Route path="/ui-design-system/components/banners" component={UIBanners} />
      <Route path="/ui-design-system/components/banners/react-banners" component={UIBannersReact} />
      <Route path="/ui-design-system/components/bubbles" component={UIBubbles} />
      <Route path="/ui-design-system/components/buttons" component={UIButtons} />
      <Route path="/ui-design-system/components/buttons/react-buttons" component={UIButtonsReact} />
      <Route path="/ui-design-system/components/code" component={UICode} />
      <Route path="/ui-design-system/components/code/react-copyablecommand" component={UICopyableCommandReact} />
      <Route path="/ui-design-system/components/forms" component={UIForms} />
      <Route path="/ui-design-system/components/rich-forms" component={UIRichForms} />
      <Route path="/ui-design-system/components/layouts" component={UILayouts} />
      <Route path="/ui-design-system/components/layouts/react-layouts" component={UILayoutsReact} />
      <Route path="/ui-design-system/components/lists" component={UILists} />
      <Route path="/ui-design-system/components/tabs" component={UITabs} />
      <Route path="/ui-design-system/components/tabs/react-tabs" component={UITabsReact} />
      <Route path="/ui-design-system/components/tables" component={UITables} />
      <Route path="/ui-design-system/components/tables/react-tables" component={UITablesReact} />
      <Route path="/ui-design-system/components/view-modal" component={UIViewModal} />
      <Route path="/ui-design-system/components/view-modal/react-view-modal" component={UIViewModalReact} />

      //Guidelines
      <Route path="/ui-design-system/guidelines" component={GuidelinesIndex} />
      <Route path="/ui-design-system/guidelines/grid" component={UIGrid} />
      <Route path="/ui-design-system/guidelines/modify" component={UIModify} />

      //Misc
      <Route path="/ui-design-system/resources" component={Resources} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
