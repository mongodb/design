import kebabCase from 'lodash/kebabCase';
import { titleCase } from './titleCase';
import { SubPathMeta } from './types';

export const ComponentSubPath = {
  Avatar: 'avatar',
  Badge: 'badge',
  Banner: 'banner',
  Button: 'button',
  Card: 'card',
  Callout: 'callout',
  CanvasHeader: 'canvas-header',
  Checkbox: 'checkbox',
  Chip: 'chip',
  Code: 'code',
  Combobox: 'combobox',
  ConfirmationModal: 'confirmation-modal',
  ContextDrawer: 'context-drawer',
  Copyable: 'copyable',
  DatePicker: 'date-picker',
  Drawer: 'drawer',
  EmptyState: 'empty-state',
  ExpandableCard: 'expandable-card',
  FormFooter: 'form-footer',
  GuideCue: 'guide-cue',
  IconButton: 'icon-button',
  InfoSprinkle: 'info-sprinkle',
  InlineDefinition: 'inline-definition',
  LoadingIndicator: 'loading-indicator',
  Logo: 'logo',
  MarketingModal: 'marketing-modal',
  Menu: 'menu',
  Modal: 'modal',
  NumberInput: 'number-input',
  OrderedList: 'ordered-list',
  Pagination: 'pagination',
  PasswordInput: 'password-input',
  Pipeline: 'pipeline',
  Popover: 'popover',
  PreviewCard: 'preview-card',
  ProgressBar: 'progress-bar',
  RadioBoxGroup: 'radio-box-group',
  RadioGroup: 'radio-group',
  SearchInput: 'search-input',
  SectionNav: 'section-nav',
  SegmentedControl: 'segmented-control',
  Select: 'select',
  SideNav: 'side-nav',
  SkeletonLoader: 'skeleton-loader',
  SplitButton: 'split-button',
  Stepper: 'stepper',
  Table: 'table',
  Tabs: 'tabs',
  TextArea: 'text-area',
  TextInput: 'text-input',
  Toast: 'toast',
  Toggle: 'toggle',
  Tooltip: 'tooltip',
} as const;

export type ComponentSubPath =
  (typeof ComponentSubPath)[keyof typeof ComponentSubPath];

const generateComponentNavPath = (component: ComponentSubPath) =>
  `/component/${component}/live-example`;

export const components: Array<SubPathMeta> = [
  {
    name: titleCase(ComponentSubPath.Avatar),
    navPath: generateComponentNavPath(ComponentSubPath.Avatar),
  },
  {
    name: titleCase(ComponentSubPath.Badge),
    navPath: generateComponentNavPath(ComponentSubPath.Badge),
  },
  {
    name: titleCase(ComponentSubPath.Banner),
    navPath: generateComponentNavPath(ComponentSubPath.Banner),
  },
  {
    name: titleCase(ComponentSubPath.Button),
    navPath: generateComponentNavPath(ComponentSubPath.Button),
  },
  {
    name: titleCase(ComponentSubPath.Card),
    navPath: generateComponentNavPath(ComponentSubPath.Card),
  },
  {
    name: titleCase(ComponentSubPath.Callout),
    navPath: generateComponentNavPath(ComponentSubPath.Callout),
  },
  {
    name: titleCase(ComponentSubPath.Checkbox),
    navPath: generateComponentNavPath(ComponentSubPath.Checkbox),
  },
  {
    name: titleCase(ComponentSubPath.Chip),
    navPath: generateComponentNavPath(ComponentSubPath.Chip),
  },
  {
    name: titleCase(ComponentSubPath.Code),
    navPath: generateComponentNavPath(ComponentSubPath.Code),
  },
  {
    name: titleCase(ComponentSubPath.Combobox),
    navPath: generateComponentNavPath(ComponentSubPath.Combobox),

    subComponents: ['Combobox', 'ComboboxOption', 'ComboboxGroup'],
  },
  {
    name: titleCase(ComponentSubPath.ConfirmationModal),
    navPath: generateComponentNavPath(ComponentSubPath.ConfirmationModal),
  },
  {
    name: titleCase(ComponentSubPath.ContextDrawer),
    navPath: generateComponentNavPath(ComponentSubPath.ContextDrawer),
  },
  {
    name: titleCase(ComponentSubPath.Copyable),
    navPath: generateComponentNavPath(ComponentSubPath.Copyable),
  },
  {
    name: titleCase(ComponentSubPath.DatePicker),
    navPath: generateComponentNavPath(ComponentSubPath.DatePicker),
  },
  {
    name: titleCase(ComponentSubPath.Drawer),
    navPath: generateComponentNavPath(ComponentSubPath.Drawer),
  },
  {
    name: titleCase(ComponentSubPath.ExpandableCard),
    navPath: generateComponentNavPath(ComponentSubPath.ExpandableCard),
  },
  {
    name: titleCase(ComponentSubPath.FormFooter),
    navPath: generateComponentNavPath(ComponentSubPath.FormFooter),
  },
  {
    name: titleCase(ComponentSubPath.GuideCue),
    navPath: generateComponentNavPath(ComponentSubPath.GuideCue),
  },
  {
    name: titleCase(ComponentSubPath.IconButton),
    navPath: generateComponentNavPath(ComponentSubPath.IconButton),
  },
  {
    name: titleCase(ComponentSubPath.InfoSprinkle),
    navPath: generateComponentNavPath(ComponentSubPath.InfoSprinkle),
  },
  {
    name: titleCase(ComponentSubPath.InlineDefinition),
    navPath: generateComponentNavPath(ComponentSubPath.InlineDefinition),
  },
  {
    name: titleCase(ComponentSubPath.LoadingIndicator),
    navPath: generateComponentNavPath(ComponentSubPath.LoadingIndicator),

    subComponents: ['Spinner', 'PageLoader'],
  },
  {
    name: titleCase(ComponentSubPath.Logo),
    navPath: generateComponentNavPath(ComponentSubPath.Logo),
  },
  {
    name: titleCase(ComponentSubPath.MarketingModal),
    navPath: generateComponentNavPath(ComponentSubPath.MarketingModal),
  },
  {
    name: titleCase(ComponentSubPath.Menu),
    navPath: generateComponentNavPath(ComponentSubPath.Menu),

    subComponents: ['Menu', 'MenuItem', 'SubMenu'],
  },
  {
    name: titleCase(ComponentSubPath.Modal),
    navPath: generateComponentNavPath(ComponentSubPath.Modal),
  },
  {
    name: titleCase(ComponentSubPath.NumberInput),
    navPath: generateComponentNavPath(ComponentSubPath.NumberInput),
  },
  {
    name: titleCase(ComponentSubPath.OrderedList),
    navPath: generateComponentNavPath(ComponentSubPath.OrderedList),
  },
  {
    name: titleCase(ComponentSubPath.Pagination),
    navPath: generateComponentNavPath(ComponentSubPath.Pagination),
  },
  {
    name: titleCase(ComponentSubPath.PasswordInput),
    navPath: generateComponentNavPath(ComponentSubPath.PasswordInput),
  },
  {
    name: titleCase(ComponentSubPath.Pipeline),
    navPath: generateComponentNavPath(ComponentSubPath.Pipeline),

    subComponents: ['Pipeline', 'Stage'],
  },
  {
    name: titleCase(ComponentSubPath.Popover),
    navPath: generateComponentNavPath(ComponentSubPath.Popover),
  },
  {
    name: titleCase(ComponentSubPath.PreviewCard),
    navPath: generateComponentNavPath(ComponentSubPath.PreviewCard),
  },
  {
    name: titleCase(ComponentSubPath.ProgressBar),
    navPath: generateComponentNavPath(ComponentSubPath.ProgressBar),
  },
  {
    name: titleCase(ComponentSubPath.RadioBoxGroup),
    navPath: generateComponentNavPath(ComponentSubPath.RadioBoxGroup),

    subComponents: ['RadioBoxGroup', 'RadioBox'],
  },
  {
    name: titleCase(ComponentSubPath.RadioGroup),
    navPath: generateComponentNavPath(ComponentSubPath.RadioGroup),

    subComponents: ['RadioGroup', 'Radio'],
  },
  {
    name: titleCase(ComponentSubPath.SectionNav),
    navPath: generateComponentNavPath(ComponentSubPath.SectionNav),
    subComponents: ['SectionNav', 'SectionNavItem'],
  },
  {
    name: titleCase(ComponentSubPath.SearchInput),
    navPath: generateComponentNavPath(ComponentSubPath.SearchInput),
  },
  {
    name: titleCase(ComponentSubPath.SegmentedControl),
    navPath: generateComponentNavPath(ComponentSubPath.SegmentedControl),

    subComponents: ['SegmentedControl', 'SegmentedControlOption'],
  },
  {
    name: titleCase(ComponentSubPath.Select),
    navPath: generateComponentNavPath(ComponentSubPath.Select),

    subComponents: ['Select', 'Option', 'OptionGroup'],
  },
  {
    name: titleCase(ComponentSubPath.SideNav),
    navPath: generateComponentNavPath(ComponentSubPath.SideNav),

    subComponents: ['SideNav', 'SideNavItem', 'SideNavGroup'],
  },
  {
    name: titleCase(ComponentSubPath.SkeletonLoader),
    navPath: generateComponentNavPath(ComponentSubPath.SkeletonLoader),

    subComponents: [
      'ParagraphSkeleton',
      'FormSkeleton',
      'TableSkeleton',
      'CardSkeleton',
    ],
  },
  {
    name: titleCase(ComponentSubPath.SplitButton),
    navPath: generateComponentNavPath(ComponentSubPath.SplitButton),
  },
  {
    name: titleCase(ComponentSubPath.Stepper),
    navPath: generateComponentNavPath(ComponentSubPath.Stepper),

    subComponents: ['Stepper', 'Step'],
  },
  {
    name: titleCase(ComponentSubPath.Table),
    navPath: generateComponentNavPath(ComponentSubPath.Table),

    subComponents: [
      'Table',
      'TableHead',
      'HeaderRow',
      'TableBody',
      'Row',
      'Cell',
    ],
  },
  {
    name: titleCase(ComponentSubPath.Tabs),
    navPath: generateComponentNavPath(ComponentSubPath.Tabs),

    subComponents: ['Tabs', 'Tab'],
  },
  {
    name: titleCase(ComponentSubPath.TextArea),
    navPath: generateComponentNavPath(ComponentSubPath.TextArea),
  },
  {
    name: titleCase(ComponentSubPath.TextInput),
    navPath: generateComponentNavPath(ComponentSubPath.TextInput),
  },
  {
    name: titleCase(ComponentSubPath.Toast),
    navPath: generateComponentNavPath(ComponentSubPath.Toast),
  },
  {
    name: titleCase(ComponentSubPath.Toggle),
    navPath: generateComponentNavPath(ComponentSubPath.Toggle),
  },
  {
    name: titleCase(ComponentSubPath.Tooltip),
    navPath: generateComponentNavPath(ComponentSubPath.Tooltip),
  },
];

/**
 * Returns the component object matching a given name
 */
export const findComponent = (componentName: string) => {
  return components.find(c => kebabCase(c.name) === kebabCase(componentName));
};
