import { titleCase } from './titleCase';
import { SubPathMeta } from './types';

/**
 * TODO: Contentstack models do not support patterns that are implemented with
 * multiple packages (e.g. Charts and Chat). These patterns are currently limited
 * in what documentation can be provided until additional models are created.
 */
export const PatternSubPath = {
  AccessRestrictionMessages: 'access-restriction-messages',
  AIBranding: 'ai-branding',
  Charts: 'charts',
  Chat: 'chat',
  CloudNavLayout: 'cloud-nav-layout',
  DateTime: 'date-and-time',
  EmptyState: 'empty-state',
  EndOfLife: 'end-of-life',
  FeatureWalls: 'feature-walls',
  Forms: 'forms',
} as const;

export type PatternSubPath =
  (typeof PatternSubPath)[keyof typeof PatternSubPath];

const generateComponentNavPath = (component: PatternSubPath) =>
  `/component/${component}/live-example`;

const generatePatternPath = (pattern: PatternSubPath) => `/pattern/${pattern}`;

export const patterns: Array<SubPathMeta> = [
  {
    name: titleCase(PatternSubPath.AccessRestrictionMessages),
    navPath: generatePatternPath(PatternSubPath.AccessRestrictionMessages),
    isPrivate: true,
  },
  {
    name: titleCase(PatternSubPath.AIBranding),
    navPath: generatePatternPath(PatternSubPath.AIBranding),
    isPrivate: true,
  },
  {
    name: titleCase(PatternSubPath.Charts),
    navPath: generateComponentNavPath(PatternSubPath.Charts),
    isComponent: true,
    subComponents: [
      'Chart',
      'ChartGrid',
      'ChartHeader',
      'ChartTooltip',
      'EventMarkerLine',
      'EventMarkerPoint',
      'Line',
      'ThresholdLine',
      'XAxis',
      'YAxis',
    ],
  },
  {
    name: titleCase(PatternSubPath.Chat),
    navPath: generatePatternPath(PatternSubPath.Chat),
  },
  {
    name: titleCase(PatternSubPath.CloudNavLayout),
    navPath: generateComponentNavPath(PatternSubPath.CloudNavLayout),
    isPrivate: true,
    subComponents: ['CloudNavLayout'],
    isComponent: true,
  },
  {
    name: titleCase(PatternSubPath.DateTime),
    navPath: generatePatternPath(PatternSubPath.DateTime),
  },
  {
    name: titleCase(PatternSubPath.EmptyState),
    navPath: generateComponentNavPath(PatternSubPath.EmptyState),
    isComponent: true,
  },
  {
    name: titleCase(PatternSubPath.EndOfLife),
    navPath: generatePatternPath(PatternSubPath.EndOfLife),
    isPrivate: true,
  },
  {
    name: titleCase(PatternSubPath.FeatureWalls),
    navPath: generateComponentNavPath(PatternSubPath.FeatureWalls),
    isPrivate: true,
    isComponent: true,
    subComponents: [
      'ActivationSteps',
      'FeatureOverview',
      'Header',
      'InfoBlock',
      'Templates',
      'UseCases',
    ],
  },
  {
    name: titleCase(PatternSubPath.Forms),
    navPath: generatePatternPath(PatternSubPath.Forms),
  },
];
