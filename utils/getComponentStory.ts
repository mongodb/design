import { Meta } from '@storybook/react';
import dynamic from 'next/dynamic';
import {startCase} from 'lodash'
// import dynamic from 'next/dynamic';

export async function getComponentStory(kebabName: string) {
  console.log(`@leafygreen-ui/${kebabName}/src/${startCase(kebabName)}.story`);

  switch (componentName) {
    case 'a11y':
      return null;
    case 'badge':
      return await import('@leafygreen-ui/badge/src/Badge.story');
    case 'banner':
      return await import('@leafygreen-ui/banner/src/Banner.story');
    case 'box':
      return await import('@leafygreen-ui/box/src/Box.story');
    case 'button':
      return await import('@leafygreen-ui/button/src/Button.story');
    case 'callout':
      return await import('@leafygreen-ui/callout/src/Callout.story');
    case 'card':
      return await import('@leafygreen-ui/card/src/Card.story');
    case 'checkbox':
      return await import('@leafygreen-ui/checkbox/src/Checkbox.story');
    case 'code':
      return await import('@leafygreen-ui/code/src/Code.story');
    case 'combobox':
      return await import('@leafygreen-ui/combobox/src/Combobox.story');
    case 'confirmation-modal':
      // prettier-ignore
      return await import('@leafygreen-ui/confirmation-modal/src/ConfirmationModal.story');
    case 'copyable':
      return await import('@leafygreen-ui/copyable/src/copyable.story');
    case 'emotion':
      return null;
    case 'expandable-card':
      // prettier-ignore
      return await import('@leafygreen-ui/expandable-card/src/ExpandableCard.story');
    case 'form-footer':
      // prettier-ignore
      return await import('@leafygreen-ui/form-footer/src/FormFooter.story');
    case 'hooks':
      return null;
    case 'icon':
      return await import('@leafygreen-ui/icon/src/icon.story');
    case 'icon-button':
      // prettier-ignore
      return await import('@leafygreen-ui/icon-button/src/IconButton.story');
    case 'inline-definition':
      // prettier-ignore
      return await import('@leafygreen-ui/inline-definition/src/InlineDefinition.story');
    case 'interaction-ring':
      return null;
    case 'leafygreen-provider':
      return null;
    case 'lib':
      return null;
    case 'logo':
      return await import('@leafygreen-ui/logo/src/logo.story');
    case 'marketing-modal':
      // prettier-ignore
      return await import('@leafygreen-ui/marketing-modal/src/MarketingModal.story');
    case 'menu':
      return await import('@leafygreen-ui/menu/src/Menu.story');
    case 'modal':
      return await import('@leafygreen-ui/modal/src/Modal.story');
    case 'palette':
      return await import('@leafygreen-ui/palette/src/palette.story');
    case 'pipeline':
      return await import('@leafygreen-ui/pipeline/src/pipeline.story');
    case 'popover':
      return await import('@leafygreen-ui/popover/src/popover.story');
    case 'portal':
      return await import('@leafygreen-ui/portal/src/portal.story');
    case 'radio-box-group':
      // prettier-ignore
      return await import('@leafygreen-ui/radio-box-group/src/RadioBoxGroup.story');
    case 'radio-group':
      // prettier-ignore
      return await import('@leafygreen-ui/radio-group/src/RadioGroup.story');
    case 'ripple':
      return null;
    case 'segmented-control':
      // prettier-ignore
      return await import('@leafygreen-ui/segmented-control/src/SegmentedControl.story');
    case 'select':
      return await import('@leafygreen-ui/select/src/select.story');
    case 'side-nav':
      return await import('@leafygreen-ui/side-nav/src/SideNav.story');
    case 'stepper':
      return await import('@leafygreen-ui/stepper/src/stepper.story');
    case 'table':
      return await import('@leafygreen-ui/table/src/table.story');
    case 'tabs':
      return await import('@leafygreen-ui/tabs/src/tabs.story');
    case 'testing-lib':
      return null;
    case 'text-area':
      return await import('@leafygreen-ui/text-area/src/TextArea.story');
    case 'text-input':
      return await import('@leafygreen-ui/text-input/src/TextInput.story');
    case 'toast':
      return await import('@leafygreen-ui/toast/src/toast.story');
    case 'toggle':
      return await import('@leafygreen-ui/toggle/src/toggle.story');
    case 'tokens':
      return await import('@leafygreen-ui/tokens/src/tokens.story');
    case 'tooltip':
      return await import('@leafygreen-ui/tooltip/src/tooltip.story');
    case 'typography':
      return await import('@leafygreen-ui/typography/src/typography.story');
  }

  // return dynamic(
  //   () => import(
  //     `@leafygreen-ui/${kebabName}/src/${startCase(kebabName)}.story.tsx`
  //   ),
  //   {
  //     ssr: false,
  //   }
  // )
}