import Contentstack from "contentstack";
import defaults from "lodash/defaults";
import startCase from "lodash/startCase";

import {
  BlockPropsMap,
  ContentTypeUID,
} from "@/components/content-stack/types";

import { ComponentFields, ContentPage, ContentPageGroup } from "./types";

const ENV_MAP = {
  main: "main",
  production: "main",
  staging: "staging",
  dev: "staging",
} as const;

const environment = ((): string => {
  const environmentVariable = process.env.NEXT_PUBLIC_ENVIRONMENT;
  if (environmentVariable && ENV_MAP[environmentVariable]) {
    return ENV_MAP[environmentVariable];
  }
  throw new Error(`Could not find environment "${environmentVariable}"`);
})();

const Stack = Contentstack.Stack({
  api_key: process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY,
  delivery_token: process.env.NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN,
  environment,
});

interface QueryOptions {
  includeContent: boolean;
}

const componentProperties = [
  "uid",
  "title",
  "description",
  "url",
  "figmaurl",
  "private",
  "codesandbox_url",
];
const optionalComponentProperties = ["designguidelines"];

/**
 * @returns All component objects, optionally with all associated content (i.e. guidelines)
 */
export async function getComponents(
  options?: QueryOptions
): Promise<Array<ComponentFields>> {
  try {
    options = defaults(options, { includeContent: false });

    const results: Array<ComponentFields> = (
      await Stack.ContentType("component")
        .Query()
        .only([
          ...componentProperties,
          ...(options?.includeContent ? optionalComponentProperties : []),
        ])
        .toJSON()
        .find()
    )[0];
    return results.sort((a, b) => a.title.localeCompare(b.title));
  } catch (error) {
    console.error("No Component pages found", error);
    // Return no component pages
    return [];
  }
}

/**
 * @returns the component meta & optionally content for a given componentName
 */
export async function getComponent(
  componentName: string,
  options?: QueryOptions
): Promise<ComponentFields | undefined> {
  try {
    const query = Stack.ContentType("component").Query();
    const result = await query
      .where("title", startCase(componentName))
      .only([
        ...componentProperties,
        ...(options?.includeContent ? optionalComponentProperties : []),
      ])
      .toJSON()
      .find();
    return result[0][0];
  } catch (error) {
    console.error("Component page not found", error);
  }
}

/**
 * @returns All content page groups with
 */
export async function getContentPageGroups(): Promise<Array<ContentPageGroup>> {
  try {
    const query = Stack.ContentType("content_page_group").Query();
    const pageGroups: Array<ContentPageGroup> = (
      await query
        .includeReference("content_pages")
        .only(["content_pages", "uid", "title", "url", "iconname"])
        .toJSON()
        .find()
    )[0].map(({ content_pages, ...meta }: ContentPageGroup) => {
      return {
        ...meta,
        content_pages: content_pages
          // TODO: strip fields in initial query
          // Strip any additional fields
          .map(({ uid, title, url }) => ({ uid, title, url }))
          .sort((a, b) => a.title.localeCompare(b.title)),
      };
    });

    return pageGroups;
  } catch (error) {
    console.error("No Content Page Groups found", error);
    // Return no component pages
    return [];
  }
}

export async function getContentPage(
  contentPageName: string
): Promise<ContentPage | undefined> {
  try {
    const query = Stack.ContentType("content_page").Query();
    const result = await query
      .where("title", startCase(contentPageName))
      .includeEmbeddedItems()
      .toJSON()
      .find();
    return result[0][0];
  } catch (error) {
    console.error("Content page not found", error);
  }
}

export async function getEntryById<T extends ContentTypeUID>(
  content_type_uid: T,
  uid: string
): Promise<BlockPropsMap[T]> {
  try {
    const query = Stack.ContentType(content_type_uid).Entry(uid);
    const result = await query.includeEmbeddedItems().toJSON().fetch();
    return result as BlockPropsMap[T];
  } catch (error) {
    console.error("Entry not found", error);
    return {} as BlockPropsMap[T];
  }
}
