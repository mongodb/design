import { CustomComponentDoc } from './tsdoc.utils';

export interface ContentPageGroup extends Object {
  uid: string;
  title: string;
  url: string;
  iconname: string;
  content_pages: Array<ContentPage>;
}

export interface ContentPage {
  title: string;
  url: string;
  content: unknown;
}

export interface ComponentFields {
  uid: string;
  title: string;
  description: string;
  url: string;
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
