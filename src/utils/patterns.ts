import { titleCase } from './titleCase';
import { SubPathMeta } from './types';

/**
 * TODO: Contentstack models do not support patterns that are implemented with
 * multiple packages (e.g. Charts and Chat). These patterns are currently limited
 * in what documentation can be provided until additional models are created.
 */
export const PatternSubPath = {
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
    name: titleCase(PatternSubPath.DateTime),
    navPath: generatePatternPath(PatternSubPath.DateTime),
  },
  {
    name: titleCase(PatternSubPath.EmptyState),
    navPath: generateComponentNavPath(PatternSubPath.EmptyState),
    isComponent: true,
  },

  {
    name: titleCase(PatternSubPath.Forms),
    navPath: generatePatternPath(PatternSubPath.Forms),
  },
];
