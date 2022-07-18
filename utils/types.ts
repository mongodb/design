export const Component = {
  Badge: 'badge',
  Banner: 'banner',
  Box: 'box',
  Button: 'button',
  Callout: 'callout',
  Card: 'card',
  Checkbox: 'checkbox',
  Code: 'code',
  Combobox: 'combobox',
  ConfirmationModal: 'confirmation-modal',
  Copyable: 'copyable',
  FormFooter: 'form-footer',
  ExpandableCard: 'expandable-card',
  Icon: 'icon',
  IconButton: 'icon-button',
  InlineDefinition: 'inline-definition',
  Logo: 'logo',
  MarketingModal: 'marketing-modal',
  Menu: 'menu',
  Modal: 'modal',
  Palette: 'palette',
  Pipeline: 'pipeline',
  Popover: 'popover',
  Portal: 'portal',
  RadioBoxGroup: 'radio-box-group',
  RadioGroup: 'radio-group',
  SegmentedControl: 'segmented-control',
  Select: 'select',
  SideNav: 'side-nav',
  Stepper: 'stepper',
  Table: 'table',
  Tabs: 'tabs',
  TextArea: 'text-area',
  TextInput: 'text-input',
  Toast: 'toast',
  Toggle: 'toggle',
  Tokens: 'tokens',
  Tooltip: 'tooltip',
  Typography: 'typography',
} as const;

export type Component = typeof Component[keyof typeof Component];

export interface BaseLayoutProps {
  component: Component;
  changelog: string;
  readme: string;
}
