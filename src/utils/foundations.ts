import { titleCase } from './titleCase';
import { SubPathMeta } from './types';

export const FoundationSubPath = {
  Accessibility: 'accessibility',
  CopyGrammarAndMechanics: 'copy-grammar-and-mechanics',
  CopyVoiceAndTone: 'copy-voice-and-tone',
  FigmaLibrary101: 'figma-library-101',
  Grid: 'grid',
  Icons: 'icon',
  IconCreation: 'icon-creation',
  Palette: 'palette',
  Tokens: 'tokens',
  Typography: 'typography',
} as const;

export type FoundationSubPath =
  (typeof FoundationSubPath)[keyof typeof FoundationSubPath];

const generateComponentNavPath = (component: FoundationSubPath) =>
  `/component/${component}/live-example`;

const generateFoundationNavPath = (foundation: FoundationSubPath) =>
  `/foundation/${foundation}`;

export const foundations: Array<SubPathMeta> = [
  {
    name: titleCase(FoundationSubPath.Accessibility),
    navPath: generateFoundationNavPath(FoundationSubPath.Accessibility),
  },
  // {
  //   name: titleCase(FoundationSubPath.CopyGrammarAndMechanics),
  //   navPath: generateFoundationNavPath(
  //     FoundationSubPath.CopyGrammarAndMechanics,
  //   ),
  //   isPrivate: true,
  // },
  // {
  //   name: titleCase(FoundationSubPath.CopyVoiceAndTone),
  //   navPath: generateFoundationNavPath(FoundationSubPath.CopyVoiceAndTone),
  //   isPrivate: true,
  // },
  {
    name: titleCase(FoundationSubPath.Grid),
    navPath: generateFoundationNavPath(FoundationSubPath.Grid),
  },
  {
    name: titleCase(FoundationSubPath.Icons),
    navPath: generateComponentNavPath(FoundationSubPath.Icons),
    isComponent: true,
  },
  {
    name: titleCase(FoundationSubPath.IconCreation),
    navPath: generateFoundationNavPath(FoundationSubPath.IconCreation),
  },
  {
    name: titleCase(FoundationSubPath.Palette),
    navPath: generateComponentNavPath(FoundationSubPath.Palette),
    isComponent: true,
  },
  {
    name: titleCase(FoundationSubPath.Tokens),
    navPath: generateFoundationNavPath(FoundationSubPath.Tokens),
  },
  {
    name: titleCase(FoundationSubPath.Typography),
    navPath: generateComponentNavPath(FoundationSubPath.Typography),
    isComponent: true,
  },
];
