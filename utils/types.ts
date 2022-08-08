import { EntryFields } from "contentful";

export interface ContentPageFields {
  title: EntryFields.Text;
  section: EntryFields.Text;
  content: EntryFields.RichText;
};

export interface ContentPageSectionFields {
  title: EntryFields.Text;
  iconName: EntryFields.Text;
  contentPages: any; // todo: replace with correct reference type
};

export interface ComponentFields {
  name: EntryFields.Text;
  description: EntryFields.Text;
  kebabCaseName: EntryFields.Text;
  packageName: EntryFields.Text;
  figmaUrl?: EntryFields.Text;
  designGuidelines?: EntryFields.RichText;
};

export interface BaseLayoutProps {
  componentName: string;
  componentKebabCaseName: string;
  changelog: string;
  readme: string;
}
