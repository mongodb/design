import { startCase, toLower } from 'lodash';

const Pattern = {
  Chat: 'chat',
  EmptyState: 'empty-state',
  Forms: 'forms',
  EndOfLife: 'end-of-life',
} as const;

export type Pattern = (typeof Pattern)[keyof typeof Pattern];

const titleCase = (component: Pattern) => {
  return startCase(toLower(component));
};

const generateComponentNavPath = (component: Pattern) =>
  `/component/${component}/live-example`;

const generatePatternPath = (foundation: Pattern) =>
  `/foundation/${foundation}`;

export interface PatternMeta {
  name: string;
  navPath: string;
  isPrivate?: boolean;
  isComponent?: boolean;
}

export const patterns: Array<PatternMeta> = [
  {
    name: titleCase(Pattern.Chat),
    navPath: generatePatternPath(Pattern.Chat),
  },
  {
    name: titleCase(Pattern.EmptyState),
    navPath: generateComponentNavPath(Pattern.EmptyState),
    isComponent: true,
  },
  {
    name: titleCase(Pattern.Forms),
    navPath: generatePatternPath(Pattern.Forms),
  },
  {
    name: titleCase(Pattern.EndOfLife),
    navPath: generatePatternPath(Pattern.EndOfLife),
  },
];
