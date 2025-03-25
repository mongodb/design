import { titleCase } from './titleCase';

export const Pattern = {
  Chat: 'chat',
  EmptyState: 'empty-state',
  EndOfLife: 'end-of-life',
  Forms: 'forms',
  CloudNavLayout: 'cloud-nav-layout',
  FeatureWall: 'feature-wall',
} as const;

export type Pattern = (typeof Pattern)[keyof typeof Pattern];

const generateComponentNavPath = (component: Pattern) =>
  `/component/${component}/live-example`;

const generatePatternPath = (pattern: Pattern) => `/pattern/${pattern}`;

export interface PatternMeta {
  name: string;
  navPath: string;
  isPrivate?: boolean;
  isComponent?: boolean;
  subComponents?: Array<string>; // determines what component props to display in the code documentation tab
}

export const patterns: Array<PatternMeta> = [
  {
    name: titleCase(Pattern.Chat),
    navPath: generatePatternPath(Pattern.Chat),
  },
  {
    name: titleCase(Pattern.CloudNavLayout),
    navPath: generateComponentNavPath(Pattern.CloudNavLayout),
    isPrivate: true,
    subComponents: ['CloudNavLayout'],
    isComponent: true,
  },
  {
    name: titleCase(Pattern.EmptyState),
    navPath: generateComponentNavPath(Pattern.EmptyState),
    isComponent: true,
  },
  {
    name: titleCase(Pattern.EndOfLife),
    navPath: generatePatternPath(Pattern.EndOfLife),
    isPrivate: true,
  },
  {
    name: titleCase(Pattern.Forms),
    navPath: generatePatternPath(Pattern.Forms),
  },
  {
    name: titleCase(Pattern.FeatureWall),
    navPath: generatePatternPath(Pattern.FeatureWall),
    isPrivate: true,
  },
];
