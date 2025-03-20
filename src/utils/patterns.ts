import { titleCase } from './titleCase';

export const Pattern = {
  Chat: 'chat',
  EmptyState: 'empty-state',
  EndOfLife: 'end-of-life',
  Forms: 'forms',
  CloudNavLayout: 'cloud-nav-layout',
  ProductFeatureWall: 'product-feature-wall',
} as const;

export type Pattern = (typeof Pattern)[keyof typeof Pattern];

const generateComponentNavPath = (component: Pattern) =>
  `/component/${component}/live-example`;

const generatePatternPath = (foundation: Pattern) =>
  `/foundation/${foundation}`;

export interface PatternMeta {
  name: string;
  navPath: string;
  isPrivate?: boolean;
  isComponent?: boolean;
  subComponents?: Array<string>;
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
    name: titleCase(Pattern.ProductFeatureWall),
    navPath: generatePatternPath(Pattern.ProductFeatureWall),
    isPrivate: true,
  },
];
