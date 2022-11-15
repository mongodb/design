import { EntryFields } from 'contentful';
import { CustomComponentDoc } from './tsdoc.utils';

export interface ContentPageFields {
  title: EntryFields.Text;
  content: EntryFields.RichText;
}

export interface ContentPageGroupFields {
  title: EntryFields.Text;
  iconName: EntryFields.Text;
  contentPages: any; // todo: replace with correct reference type
}
export interface ComponentFields {
  title: EntryFields.Text;
  description: EntryFields.Text;
  figmaUrl?: EntryFields.Text;
  designguidelines?: EntryFields.RichText;
}

export interface BaseLayoutProps {
  componentName: string;
  componentKebabCaseName: string;
  changelog: string;
  readme: string;
  tsDoc: Array<CustomComponentDoc> | null;
}
