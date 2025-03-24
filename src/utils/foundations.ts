import { titleCase } from './titleCase';

export const Foundation = {
  Accessibility: 'accessibility',
  FigmaLibrary101: 'figma-library-101',
  Grid: 'grid',
  Icons: 'icon',
  IconCreation: 'icon-creation',
  Palette: 'palette',
  Tokens: 'tokens',
  Typography: 'typography',
} as const;

export type Foundation = (typeof Foundation)[keyof typeof Foundation];

const generateComponentNavPath = (component: Foundation) =>
  `/component/${component}/live-example`;

const generateFoundationNavPath = (foundation: Foundation) =>
  `/foundation/${foundation}`;

export interface FoundationMeta {
  name: string;
  navPath: string;
  isPrivate?: boolean;
  isComponent?: boolean;
  subComponents?: Array<string>;
}

export const foundations: Array<FoundationMeta> = [
  {
    name: titleCase(Foundation.Accessibility),
    navPath: generateFoundationNavPath(Foundation.Accessibility),
  },
  {
    name: titleCase(Foundation.FigmaLibrary101),
    navPath: generateFoundationNavPath(Foundation.FigmaLibrary101),
  },
  {
    name: titleCase(Foundation.Grid),
    navPath: generateFoundationNavPath(Foundation.Grid),
  },
  {
    name: titleCase(Foundation.Icons),
    navPath: generateComponentNavPath(Foundation.Icons),
    isComponent: true,
  },
  {
    name: titleCase(Foundation.IconCreation),
    navPath: generateFoundationNavPath(Foundation.IconCreation),
  },
  {
    name: titleCase(Foundation.Palette),
    navPath: generateComponentNavPath(Foundation.Palette),
    isComponent: true,
  },
  {
    name: titleCase(Foundation.Tokens),
    navPath: generateFoundationNavPath(Foundation.Tokens),
  },
  {
    name: titleCase(Foundation.Typography),
    navPath: generateComponentNavPath(Foundation.Typography),
    isComponent: true,
  },
];
