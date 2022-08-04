import { EntryFields } from "contentful";

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
