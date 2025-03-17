import kebabCase from 'lodash/kebabCase';
import { titleCase } from './titleCase';

const Component = {
  Avatar: 'avatar',
  Badge: 'badge',
  Banner: 'banner',
  Button: 'button',
  Card: 'card',
  Callout: 'callout',
  CanvasHeader: 'canvas-header',
  Checkbox: 'checkbox',
  Chip: 'chip',
  CloudNav: 'cloud-nav',
  Code: 'code',
  Combobox: 'combobox',
  ConfirmationModal: 'confirmation-modal',
  Copyable: 'copyable',
  DatePicker: 'date-picker',
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
  MongoNav: 'mongo-nav',
  NumberInput: 'number-input',
  OrderedList: 'ordered-list',
  Pagination: 'pagination',
  PasswordInput: 'password-input',
  Pipeline: 'pipeline',
  Popover: 'popover',
  RadioBoxGroup: 'radio-box-group',
  RadioGroup: 'radio-group',
  SearchInput: 'search-input',
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

type Component = (typeof Component)[keyof typeof Component];

const generateComponentNavPath = (component: Component) =>
  `/component/${component}/live-example`;

export interface ComponentMeta {
  name: string;
  navPath: string;
  subComponents?: Array<string>;
  isPrivate?: boolean;
}

export const components: Array<ComponentMeta> = [
  {
    name: titleCase(Component.Avatar),
    navPath: generateComponentNavPath(Component.Avatar),
  },
  {
    name: titleCase(Component.Badge),
    navPath: generateComponentNavPath(Component.Badge),
  },
  {
    name: titleCase(Component.Banner),
    navPath: generateComponentNavPath(Component.Banner),
  },
  {
    name: titleCase(Component.Button),
    navPath: generateComponentNavPath(Component.Button),
  },
  {
    name: titleCase(Component.Card),
    navPath: generateComponentNavPath(Component.Card),
  },
  {
    name: titleCase(Component.Callout),
    navPath: generateComponentNavPath(Component.Callout),
  },
  {
    name: titleCase(Component.CanvasHeader),
    navPath: generateComponentNavPath(Component.CanvasHeader),
    isPrivate: true,
  },
  {
    name: titleCase(Component.Checkbox),
    navPath: generateComponentNavPath(Component.Checkbox),
  },
  {
    name: titleCase(Component.Chip),
    navPath: generateComponentNavPath(Component.Chip),
  },
  {
    name: titleCase(Component.CloudNav),
    navPath: generateComponentNavPath(Component.CloudNav),
    isPrivate: true,
  },
  {
    name: titleCase(Component.Code),
    navPath: generateComponentNavPath(Component.Code),
  },
  {
    name: titleCase(Component.Combobox),
    navPath: generateComponentNavPath(Component.Combobox),

    subComponents: ['Combobox', 'ComboboxOption', 'ComboboxGroup'],
  },
  {
    name: titleCase(Component.ConfirmationModal),
    navPath: generateComponentNavPath(Component.ConfirmationModal),
  },
  {
    name: titleCase(Component.Copyable),
    navPath: generateComponentNavPath(Component.Copyable),
  },
  {
    name: titleCase(Component.DatePicker),
    navPath: generateComponentNavPath(Component.DatePicker),
  },
  {
    name: titleCase(Component.ExpandableCard),
    navPath: generateComponentNavPath(Component.ExpandableCard),
  },
  {
    name: titleCase(Component.FormFooter),
    navPath: generateComponentNavPath(Component.FormFooter),
  },
  {
    name: titleCase(Component.GuideCue),
    navPath: generateComponentNavPath(Component.GuideCue),
  },
  {
    name: titleCase(Component.IconButton),
    navPath: generateComponentNavPath(Component.IconButton),
  },
  {
    name: titleCase(Component.InfoSprinkle),
    navPath: generateComponentNavPath(Component.InfoSprinkle),
  },
  {
    name: titleCase(Component.InlineDefinition),
    navPath: generateComponentNavPath(Component.InlineDefinition),
  },
  {
    name: titleCase(Component.LoadingIndicator),
    navPath: generateComponentNavPath(Component.LoadingIndicator),

    subComponents: ['Spinner', 'PageLoader'],
  },
  {
    name: titleCase(Component.Logo),
    navPath: generateComponentNavPath(Component.Logo),
  },
  {
    name: titleCase(Component.MarketingModal),
    navPath: generateComponentNavPath(Component.MarketingModal),
  },
  {
    name: titleCase(Component.Menu),
    navPath: generateComponentNavPath(Component.Menu),

    subComponents: ['Menu', 'MenuItem', 'SubMenu'],
  },
  {
    name: titleCase(Component.Modal),
    navPath: generateComponentNavPath(Component.Modal),
  },
  {
    name: titleCase(Component.MongoNav),
    navPath: generateComponentNavPath(Component.MongoNav),
    isPrivate: true,
  },
  {
    name: titleCase(Component.NumberInput),
    navPath: generateComponentNavPath(Component.NumberInput),
  },
  {
    name: titleCase(Component.OrderedList),
    navPath: generateComponentNavPath(Component.OrderedList),
  },
  {
    name: titleCase(Component.Pagination),
    navPath: generateComponentNavPath(Component.Pagination),
  },
  {
    name: titleCase(Component.PasswordInput),
    navPath: generateComponentNavPath(Component.PasswordInput),
  },
  {
    name: titleCase(Component.Pipeline),
    navPath: generateComponentNavPath(Component.Pipeline),

    subComponents: ['Pipeline', 'Stage'],
  },
  {
    name: titleCase(Component.Popover),
    navPath: generateComponentNavPath(Component.Popover),
  },
  {
    name: titleCase(Component.RadioBoxGroup),
    navPath: generateComponentNavPath(Component.RadioBoxGroup),

    subComponents: ['RadioBoxGroup', 'RadioBox'],
  },
  {
    name: titleCase(Component.RadioGroup),
    navPath: generateComponentNavPath(Component.RadioGroup),

    subComponents: ['RadioGroup', 'Radio'],
  },
  {
    name: titleCase(Component.SearchInput),
    navPath: generateComponentNavPath(Component.SearchInput),
  },
  {
    name: titleCase(Component.SegmentedControl),
    navPath: generateComponentNavPath(Component.SegmentedControl),

    subComponents: ['SegmentedControl', 'SegmentedControlOption'],
  },
  {
    name: titleCase(Component.Select),
    navPath: generateComponentNavPath(Component.Select),

    subComponents: ['Select', 'Option', 'OptionGroup'],
  },
  {
    name: titleCase(Component.SideNav),
    navPath: generateComponentNavPath(Component.SideNav),

    subComponents: ['SideNav', 'SideNavItem', 'SideNavGroup'],
  },
  {
    name: titleCase(Component.SkeletonLoader),
    navPath: generateComponentNavPath(Component.SkeletonLoader),

    subComponents: [
      'ParagraphSkeleton',
      'FormSkeleton',
      'TableSkeleton',
      'CardSkeleton',
    ],
  },
  {
    name: titleCase(Component.SplitButton),
    navPath: generateComponentNavPath(Component.SplitButton),
  },
  {
    name: titleCase(Component.Stepper),
    navPath: generateComponentNavPath(Component.Stepper),

    subComponents: ['Stepper', 'Step'],
  },
  {
    name: titleCase(Component.Table),
    navPath: generateComponentNavPath(Component.Table),

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
    name: titleCase(Component.Tabs),
    navPath: generateComponentNavPath(Component.Tabs),

    subComponents: ['Tabs', 'Tab'],
  },
  {
    name: titleCase(Component.TextArea),
    navPath: generateComponentNavPath(Component.TextArea),
  },
  {
    name: titleCase(Component.TextInput),
    navPath: generateComponentNavPath(Component.TextInput),
  },
  {
    name: titleCase(Component.Toast),
    navPath: generateComponentNavPath(Component.Toast),
  },
  {
    name: titleCase(Component.Toggle),
    navPath: generateComponentNavPath(Component.Toggle),
  },
  {
    name: titleCase(Component.Tooltip),
    navPath: generateComponentNavPath(Component.Tooltip),
  },
];

/**
 * Returns the component object matching a given name
 */
export const findComponent = (componentName: string) => {
  return components.find(c => kebabCase(c.name) === kebabCase(componentName));
};
