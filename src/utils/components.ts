import { startCase, toLower } from "lodash";

const Group = {
  Display: "display",
  FormElements: "form-elements",
  Dialogs: "dialogs",
  Navigation: "navigation",
  Notifications: "notifications",
  Patterns: "patterns",
} as const;

type Group = (typeof Group)[keyof typeof Group];

export { Group };

const Component = {
  Badge: "badge",
  Banner: "banner",
  Button: "button",
  Card: "card",
  Callout: "callout",
  Checkbox: "checkbox",
  Chip: "chip",
  Code: "code",
  Combobox: "combobox",
  ConfirmationModal: "confirmation-modal",
  Copyable: "copyable",
  DatePicker: "date-picker",
  EmptyState: "empty-state",
  ExpandableCard: "expandable-card",
  FormFooter: "form-footer",
  GuideCue: "guide-cue",
  IconButton: "icon-button",
  InfoSprinkle: "info-sprinkle",
  InlineDefinition: "inline-definition",
  LoadingIndicator: "loading-indicator",
  Logo: "logo",
  MarketingModal: "marketing-modal",
  Menu: "menu",
  Modal: "modal",
  MongoNav: "mongo-nav",
  NumberInput: "number-input",
  Pagination: "pagination",
  PasswordInput: "password-input",
  Pipeline: "pipeline",
  Popover: "popover",
  RadioBoxGroup: "radio-box-group",
  RadioGroup: "radio-group",
  SearchInput: "search-input",
  SegmentedControl: "segmented-control",
  Select: "select",
  SideNav: "side-nav",
  SkeletonLoader: "skeleton-loader",
  SplitButton: "split-button",
  Stepper: "stepper",
  Table: "table",
  Tabs: "tabs",
  TextArea: "text-area",
  TextInput: "text-input",
  Toast: "toast",
  Toggle: "toggle",
  Tooltip: "tooltip",
} as const;

type Component = (typeof Component)[keyof typeof Component];

const titlecase = (component: Component) => {
  return startCase(toLower(component));
};

const generateComponentNavPath = (component: Component) =>
  `/component/${component}/live-example`;

export const components: Array<{
  name: string;
  navPath: string;
  group: Group;
  subComponents?: Array<string>;
  isPrivate?: boolean;
}> = [
  {
    name: titlecase(Component.Badge),
    navPath: generateComponentNavPath(Component.Badge),
    group: Group.Notifications,
  },
  {
    name: titlecase(Component.Banner),
    navPath: generateComponentNavPath(Component.Banner),
    group: Group.Notifications,
  },
  {
    name: titlecase(Component.Button),
    navPath: generateComponentNavPath(Component.Button),
    group: Group.FormElements,
  },
  {
    name: titlecase(Component.Card),
    navPath: generateComponentNavPath(Component.Card),
    group: Group.Display,
  },
  {
    name: titlecase(Component.Callout),
    navPath: generateComponentNavPath(Component.Callout),
    group: Group.Notifications,
  },
  {
    name: titlecase(Component.Checkbox),
    navPath: generateComponentNavPath(Component.Checkbox),
    group: Group.FormElements,
  },
  {
    name: titlecase(Component.Chip),
    navPath: generateComponentNavPath(Component.Chip),
    group: Group.Display,
  },
  {
    name: titlecase(Component.Code),
    navPath: generateComponentNavPath(Component.Code),
    group: Group.Display,
  },
  {
    name: titlecase(Component.Combobox),
    navPath: generateComponentNavPath(Component.Combobox),
    group: Group.FormElements,
    subComponents: ["Combobox", "ComboboxOption", "ComboboxGroup"],
  },
  {
    name: titlecase(Component.ConfirmationModal),
    navPath: generateComponentNavPath(Component.ConfirmationModal),
    group: Group.Dialogs,
  },
  {
    name: titlecase(Component.Copyable),
    navPath: generateComponentNavPath(Component.Copyable),
    group: Group.Display,
  },
  {
    name: titlecase(Component.DatePicker),
    navPath: generateComponentNavPath(Component.DatePicker),
    group: Group.FormElements,
  },
  {
    name: titlecase(Component.EmptyState),
    navPath: generateComponentNavPath(Component.EmptyState),
    group: Group.Patterns,
  },
  {
    name: titlecase(Component.ExpandableCard),
    navPath: generateComponentNavPath(Component.ExpandableCard),
    group: Group.Display,
  },
  {
    name: titlecase(Component.FormFooter),
    navPath: generateComponentNavPath(Component.FormFooter),
    group: Group.FormElements,
  },
  {
    name: titlecase(Component.GuideCue),
    navPath: generateComponentNavPath(Component.GuideCue),
    group: Group.Dialogs,
  },
  {
    name: titlecase(Component.IconButton),
    navPath: generateComponentNavPath(Component.IconButton),
    group: Group.FormElements,
  },
  {
    name: titlecase(Component.InfoSprinkle),
    navPath: generateComponentNavPath(Component.InfoSprinkle),
    group: Group.Display,
  },
  {
    name: titlecase(Component.InlineDefinition),
    navPath: generateComponentNavPath(Component.InlineDefinition),
    group: Group.Display,
  },
  {
    name: titlecase(Component.LoadingIndicator),
    navPath: generateComponentNavPath(Component.LoadingIndicator),
    group: Group.Display,
    subComponents: ["Spinner", "PageLoader"],
  },
  {
    name: titlecase(Component.Logo),
    navPath: generateComponentNavPath(Component.Logo),
    group: Group.Display,
  },
  {
    name: titlecase(Component.MarketingModal),
    navPath: generateComponentNavPath(Component.MarketingModal),
    group: Group.Dialogs,
  },
  {
    name: titlecase(Component.Menu),
    navPath: generateComponentNavPath(Component.Menu),
    group: Group.Navigation,
    subComponents: ["Menu", "MenuItem", "SubMenu"],
  },
  {
    name: titlecase(Component.Modal),
    navPath: generateComponentNavPath(Component.Modal),
    group: Group.Dialogs,
  },
  {
    name: titlecase(Component.NumberInput),
    navPath: generateComponentNavPath(Component.NumberInput),
    group: Group.FormElements,
  },
  {
    name: titlecase(Component.Pagination),
    navPath: generateComponentNavPath(Component.Pagination),
    group: Group.Display,
  },
  {
    name: titlecase(Component.PasswordInput),
    navPath: generateComponentNavPath(Component.PasswordInput),
    group: Group.FormElements,
  },
  {
    name: titlecase(Component.Pipeline),
    navPath: generateComponentNavPath(Component.Pipeline),
    group: Group.Display,
    subComponents: ["Pipeline", "Stage"],
  },
  {
    name: titlecase(Component.Popover),
    navPath: generateComponentNavPath(Component.Popover),
    group: Group.Dialogs,
  },
  {
    name: titlecase(Component.RadioBoxGroup),
    navPath: generateComponentNavPath(Component.RadioBoxGroup),
    group: Group.FormElements,
    subComponents: ["RadioBoxGroup", "RadioBox"],
  },
  {
    name: titlecase(Component.RadioGroup),
    navPath: generateComponentNavPath(Component.RadioGroup),
    group: Group.FormElements,
    subComponents: ["RadioGroup", "Radio"],
  },
  {
    name: titlecase(Component.SearchInput),
    navPath: generateComponentNavPath(Component.SearchInput),
    group: Group.FormElements,
  },
  {
    name: titlecase(Component.SegmentedControl),
    navPath: generateComponentNavPath(Component.SegmentedControl),
    group: Group.Display,
    subComponents: ["SegmentedControl", "SegmentedControlOption"],
  },
  {
    name: titlecase(Component.Select),
    navPath: generateComponentNavPath(Component.Select),
    group: Group.FormElements,
    subComponents: ["Select", "Option", "OptionGroup"],
  },
  {
    name: titlecase(Component.SideNav),
    navPath: generateComponentNavPath(Component.SideNav),
    group: Group.Navigation,
    subComponents: ["SideNav", "SideNavItem", "SideNavGroup"],
  },
  {
    name: titlecase(Component.SkeletonLoader),
    navPath: generateComponentNavPath(Component.SkeletonLoader),
    group: Group.Display,
    subComponents: [
      "ParagraphSkeleton",
      "FormSkeleton",
      "TableSkeleton",
      "CardSkeleton",
    ],
  },
  {
    name: titlecase(Component.SplitButton),
    navPath: generateComponentNavPath(Component.SplitButton),
    group: Group.FormElements,
  },
  {
    name: titlecase(Component.Stepper),
    navPath: generateComponentNavPath(Component.Stepper),
    group: Group.Navigation,
    subComponents: ["Stepper", "Step"],
  },
  {
    name: titlecase(Component.Table),
    navPath: generateComponentNavPath(Component.Table),
    group: Group.Display,
    subComponents: [
      "Table",
      "TableHead",
      "HeaderRow",
      "TableBody",
      "Row",
      "Cell",
    ],
  },
  {
    name: titlecase(Component.Tabs),
    navPath: generateComponentNavPath(Component.Tabs),
    group: Group.Navigation,
    subComponents: ["Tabs", "Tab"],
  },
  {
    name: titlecase(Component.TextArea),
    navPath: generateComponentNavPath(Component.TextArea),
    group: Group.FormElements,
  },
  {
    name: titlecase(Component.TextInput),
    navPath: generateComponentNavPath(Component.TextInput),
    group: Group.FormElements,
  },
  {
    name: titlecase(Component.Toast),
    navPath: generateComponentNavPath(Component.Toast),
    group: Group.Notifications,
  },
  {
    name: titlecase(Component.Toggle),
    navPath: generateComponentNavPath(Component.Toggle),
    group: Group.FormElements,
  },
  {
    name: titlecase(Component.Tooltip),
    navPath: generateComponentNavPath(Component.Tooltip),
    group: Group.Dialogs,
  },
  {
    name: titlecase(Component.MongoNav),
    navPath: "/private",
    group: Group.Navigation,
    isPrivate: true,
  },
];

export type ComponentMeta = {
  name: string;
  navPath: string;
  isPrivate?: boolean;
};

export const groupedComponents = components.reduce((acc, obj) => {
  const { group, name, navPath, isPrivate } = obj;
  if (!acc[group]) {
    acc[group] = [];
  }
  acc[group].push({ name, navPath, isPrivate });
  // Sort the array by component value
  acc[group].sort((a, b) => a.name.localeCompare(b.name));
  return acc;
}, {} as Record<Group, ComponentMeta[]>);
