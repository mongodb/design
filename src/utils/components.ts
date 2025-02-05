import { kebabCase, startCase, toLower } from 'lodash';

const Component = {
  Avatar: 'avatar',
  Badge: 'badge',
  Banner: 'banner',
  Button: 'button',
  Card: 'card',
  Callout: 'callout',
  Checkbox: 'checkbox',
  Chip: 'chip',
  Code: 'code',
  Combobox: 'combobox',
  ConfirmationModal: 'confirmation-modal',
  Copyable: 'copyable',
  DatePicker: 'date-picker',
  EmptyState: 'empty-state',
  ExpandableCard: 'expandable-card',
  FormFooter: 'form-footer',
  GuideCue: 'guide-cue',
  Icon: 'icon',
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

const titlecase = (component: Component) => {
  return startCase(toLower(component));
};

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
    name: titlecase(Component.Avatar),
    navPath: generateComponentNavPath(Component.Avatar),
  },
  {
    name: titlecase(Component.Badge),
    navPath: generateComponentNavPath(Component.Badge),
  },
  {
    name: titlecase(Component.Banner),
    navPath: generateComponentNavPath(Component.Banner),
  },
  {
    name: titlecase(Component.Button),
    navPath: generateComponentNavPath(Component.Button),
  },
  {
    name: titlecase(Component.Card),
    navPath: generateComponentNavPath(Component.Card),
  },
  {
    name: titlecase(Component.Callout),
    navPath: generateComponentNavPath(Component.Callout),
  },
  {
    name: titlecase(Component.Checkbox),
    navPath: generateComponentNavPath(Component.Checkbox),
  },
  {
    name: titlecase(Component.Chip),
    navPath: generateComponentNavPath(Component.Chip),
  },
  {
    name: titlecase(Component.Code),
    navPath: generateComponentNavPath(Component.Code),
  },
  {
    name: titlecase(Component.Combobox),
    navPath: generateComponentNavPath(Component.Combobox),

    subComponents: ['Combobox', 'ComboboxOption', 'ComboboxGroup'],
  },
  {
    name: titlecase(Component.ConfirmationModal),
    navPath: generateComponentNavPath(Component.ConfirmationModal),
  },
  {
    name: titlecase(Component.Copyable),
    navPath: generateComponentNavPath(Component.Copyable),
  },
  {
    name: titlecase(Component.DatePicker),
    navPath: generateComponentNavPath(Component.DatePicker),
  },
  {
    name: titlecase(Component.ExpandableCard),
    navPath: generateComponentNavPath(Component.ExpandableCard),
  },
  {
    name: titlecase(Component.FormFooter),
    navPath: generateComponentNavPath(Component.FormFooter),
  },
  {
    name: titlecase(Component.GuideCue),
    navPath: generateComponentNavPath(Component.GuideCue),
  },
  {
    name: titlecase(Component.Icon),
    navPath: generateComponentNavPath(Component.Icon),
  },
  {
    name: titlecase(Component.IconButton),
    navPath: generateComponentNavPath(Component.IconButton),
  },
  {
    name: titlecase(Component.InfoSprinkle),
    navPath: generateComponentNavPath(Component.InfoSprinkle),
  },
  {
    name: titlecase(Component.InlineDefinition),
    navPath: generateComponentNavPath(Component.InlineDefinition),
  },
  {
    name: titlecase(Component.LoadingIndicator),
    navPath: generateComponentNavPath(Component.LoadingIndicator),

    subComponents: ['Spinner', 'PageLoader'],
  },
  {
    name: titlecase(Component.Logo),
    navPath: generateComponentNavPath(Component.Logo),
  },
  {
    name: titlecase(Component.MarketingModal),
    navPath: generateComponentNavPath(Component.MarketingModal),
  },
  {
    name: titlecase(Component.Menu),
    navPath: generateComponentNavPath(Component.Menu),

    subComponents: ['Menu', 'MenuItem', 'SubMenu'],
  },
  {
    name: titlecase(Component.Modal),
    navPath: generateComponentNavPath(Component.Modal),
  },
  {
    name: titlecase(Component.NumberInput),
    navPath: generateComponentNavPath(Component.NumberInput),
  },
  {
    name: titlecase(Component.OrderedList),
    navPath: generateComponentNavPath(Component.OrderedList),
  },
  {
    name: titlecase(Component.Pagination),
    navPath: generateComponentNavPath(Component.Pagination),
  },
  {
    name: titlecase(Component.PasswordInput),
    navPath: generateComponentNavPath(Component.PasswordInput),
  },
  {
    name: titlecase(Component.Pipeline),
    navPath: generateComponentNavPath(Component.Pipeline),

    subComponents: ['Pipeline', 'Stage'],
  },
  {
    name: titlecase(Component.Popover),
    navPath: generateComponentNavPath(Component.Popover),
  },
  {
    name: titlecase(Component.RadioBoxGroup),
    navPath: generateComponentNavPath(Component.RadioBoxGroup),

    subComponents: ['RadioBoxGroup', 'RadioBox'],
  },
  {
    name: titlecase(Component.RadioGroup),
    navPath: generateComponentNavPath(Component.RadioGroup),

    subComponents: ['RadioGroup', 'Radio'],
  },
  {
    name: titlecase(Component.SearchInput),
    navPath: generateComponentNavPath(Component.SearchInput),
  },
  {
    name: titlecase(Component.SegmentedControl),
    navPath: generateComponentNavPath(Component.SegmentedControl),

    subComponents: ['SegmentedControl', 'SegmentedControlOption'],
  },
  {
    name: titlecase(Component.Select),
    navPath: generateComponentNavPath(Component.Select),

    subComponents: ['Select', 'Option', 'OptionGroup'],
  },
  {
    name: titlecase(Component.SideNav),
    navPath: generateComponentNavPath(Component.SideNav),

    subComponents: ['SideNav', 'SideNavItem', 'SideNavGroup'],
  },
  {
    name: titlecase(Component.SkeletonLoader),
    navPath: generateComponentNavPath(Component.SkeletonLoader),

    subComponents: [
      'ParagraphSkeleton',
      'FormSkeleton',
      'TableSkeleton',
      'CardSkeleton',
    ],
  },
  {
    name: titlecase(Component.SplitButton),
    navPath: generateComponentNavPath(Component.SplitButton),
  },
  {
    name: titlecase(Component.Stepper),
    navPath: generateComponentNavPath(Component.Stepper),

    subComponents: ['Stepper', 'Step'],
  },
  {
    name: titlecase(Component.Table),
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
    name: titlecase(Component.Tabs),
    navPath: generateComponentNavPath(Component.Tabs),

    subComponents: ['Tabs', 'Tab'],
  },
  {
    name: titlecase(Component.TextArea),
    navPath: generateComponentNavPath(Component.TextArea),
  },
  {
    name: titlecase(Component.TextInput),
    navPath: generateComponentNavPath(Component.TextInput),
  },
  {
    name: titlecase(Component.Toast),
    navPath: generateComponentNavPath(Component.Toast),
  },
  {
    name: titlecase(Component.Toggle),
    navPath: generateComponentNavPath(Component.Toggle),
  },
  {
    name: titlecase(Component.Tooltip),
    navPath: generateComponentNavPath(Component.Tooltip),
  },
];

/**
 * Returns the component object matching a given name
 */
export const findComponent = (componentName: string) => {
  return components.find(c => kebabCase(c.name) === kebabCase(componentName));
};
