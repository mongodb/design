import { CustomComponentDoc } from './tsdoc.utils';

export interface ContentPageFields {
  title: string;
  content: unknown;
}

export interface ContentPageGroupFields {
  title: string;
  iconName: string;
  contentPages: Array<unknown>;
}
export interface ComponentFields {
  title: string;
  description: string;
  figmaUrl?: string;
  designguidelines?: unknown;
}

export interface BaseLayoutProps {
  componentName: string;
  componentKebabCaseName: string;
  changelog: string;
  readme: string;
  tsDoc: Array<CustomComponentDoc> | null;
}
