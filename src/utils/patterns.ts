import { titleCase } from './titleCase';
import { SubPathMeta } from './types';

export const PatternSubPath = {
  Chat: 'chat',
  CloudNavLayout: 'cloud-nav-layout',
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
    name: titleCase(PatternSubPath.Forms),
    navPath: generatePatternPath(PatternSubPath.Forms),
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
];
