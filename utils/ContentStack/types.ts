export interface ContentstackMetadata {
  uid: string;
}
export interface ContentstackObject {
  _metadata: ContentstackMetadata;
}

export interface ContentPageGroup extends Object {
  uid: string;
  title: string;
  url: string;
  iconname: string;
  content_pages: Array<ContentPage>;
}

/**
 * A content page with minimal metadata
 */
export interface ContentPageMeta {
  uid: string;
  title: string;
  url: string;
}

/**
 * A full content page including content
 */
export interface ContentPage extends ContentPageMeta {
  content: unknown;
  is_private?: boolean;
}

/**
 * Minimal metadata about a component
 */
export interface ComponentPageMeta {
  uid: string;
  title: string;
  url: string;
  description: string;
  figmaurl?: string;
  private?: boolean;
}

export interface LinkData extends ContentstackObject {
  link: { title: string; href: string };
  type?: string;
}

/**
 * A {@link ComponentPageMeta} with additional data fields
 * including `figmaUrl` & `designguidelines` content
 */
export interface ComponentFields extends ComponentPageMeta {
  designguidelines?: unknown;
  links_data?: Array<{ link_data: LinkData }>;
}

export interface BaseLayoutProps {
  componentName: string;
  componentKebabCaseName: string;
  changelog: string;
  readme: string;
}
