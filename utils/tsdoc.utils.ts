import {
  ComponentDoc,
  PropItem,
  PropItemType,
  Props,
} from 'react-docgen-typescript';
import { isNull, isUndefined, omitBy, pickBy } from 'lodash';
import pascalcase from 'pascalcase';

/** PropGroup names that are inherited from elsewhere */
export const InheritablePropGroup = [
  'HTMLAttributes',
  'DOMAttributes',
  'AriaAttributes',
  'SVGAttributes',
  'String',
] as const;
export type InheritablePropGroup = keyof typeof InheritablePropGroup;

/** Determines if a prop group is inherited */
export const isInheritableGroup = (_: never, key: any) =>
  InheritablePropGroup.includes(key) || key.endsWith('HTMLAttributes');

export type PropCategories = Record<string, Props>;
export type CustomComponentDoc = Omit<ComponentDoc, 'props' | 'filePath'> & {
  props: PropCategories;
};
export interface PropGroup {
  groupName: string;
  props: Array<PropItem>;
}

/** Determines if a given object is a PropItem type */
export const isPropItem = (obj: any): obj is PropItem => {
  return (
    !isUndefined(obj.name) &&
    !isUndefined(obj.required) &&
    !isUndefined(obj.type) &&
    !isUndefined(obj.description) &&
    !isUndefined(obj.defaultValue)
  );
};

/**
 * Whether a given prop item is required
 */
export function isRequired(prop: PropItem): boolean {
  // @ts-expect-error
  return prop.required || !isUndefined(prop.tags?.required);
}

/**
 * Sorts prop items with required props first, then the rest alphabetically
 */
export function sortPropItems(a: PropItem, z: PropItem): number {
  if (isRequired(a) && !isRequired(z)) return -1;
  if (isRequired(z)) return 1;
  return a.name.localeCompare(z.name);
}

/**
 * Finds the appropriate ComponentDoc given a componentName.
 * Useful when there are multiple docs for one component
 */
export function findComponentDoc(
  componentName: string,
  tsDocArray?: Array<CustomComponentDoc> | null,
): CustomComponentDoc | undefined {
  if (isUndefined(tsDocArray)) return;
  return tsDocArray?.find(doc => doc.displayName === pascalcase(componentName));
}

/**
 * Given a TSDoc object,
 * return an array of component Props
 */
export function getComponentPropsArray(
  tsDoc?: CustomComponentDoc,
): Array<PropItem>;
export function getComponentPropsArray(props?: PropCategories): Array<PropItem>;
export function getComponentPropsArray(
  tsDocOrProps?: PropCategories | CustomComponentDoc,
): Array<PropItem> {
  if (isUndefined(tsDocOrProps)) return [];

  const props: PropCategories =
    (tsDocOrProps as CustomComponentDoc).props ??
    (tsDocOrProps as PropCategories);

  return Object.values(omitBy(props, isInheritableGroup))
    .flatMap(Object.values)
    .sort(sortPropItems);
}

export function getPropsArrayForComponentName(
  componentName: string,
  tsDoc: Array<CustomComponentDoc> | null,
) {
  return getComponentPropsArray(findComponentDoc(componentName, tsDoc));
}

export const getInheritedProps = (props: PropCategories): Array<PropGroup> => {
  return Object.entries(pickBy(props, isInheritableGroup)).map(
    ([groupName, props]: [string, Props]) => ({
      groupName,
      props: Object.values(props).flatMap(prop => prop),
    }),
  );
};

export function getTypeString(propType: PropItemType): string | undefined {
  if (!propType || !propType.name) return;

  const staticEnums = [
    'boolean',
    'ReactNode',
    'keyof IntrinsicElements',
    'keyof IntrinsicElements | ComponentType<{}>',
  ];

  if (propType.name === 'enum') {
    if (staticEnums.includes(propType.raw as string)) {
      return propType.raw;
    } else {
      return propType.value.map(val => val.value).join(' | ');
    }
  }

  return propType.name;
}

export function getDefaultValueString(
  defaultValue: PropItem['defaultValue'],
): string {
  if (isUndefined(defaultValue) || isNull(defaultValue)) {
    return '—';
  }

  if (isUndefined(defaultValue.value)) {
    return JSON.stringify(defaultValue).replace(/['"`]/g, '');
  }

  return defaultValue.value.toString().replace(/['"`]/g, '');
}

export function getDefaultValueValue({ defaultValue, type }: PropItem): any {
  if (isUndefined(defaultValue) || isNull(defaultValue)) return undefined;
  const value = defaultValue.value ?? defaultValue;

  /* eslint-disable no-fallthrough */
  switch (type.name) {
    case 'string':
    case 'text':
      return value?.toString() ?? value;

    case 'number':
      return Number(value);

    case 'enum': {
      if (type.raw === 'boolean') {
        if (value === 'true') return true;
        return false;
      }

      const valueString = value?.toString();
      const [enumId, defaultKey] = valueString.split('.');

      if (enumId === type.raw) {
        const enumValues = type.value.map(v => v.value.replace(/["'`]/g, ''));
        return (
          enumValues.find(val => val === defaultKey.toLowerCase()) ?? value
        );
      }

      return value;
    }

    default:
      return value;
  }
}

/**
 * Replaces `@link` with a MD link if a URL is provided.
 * Temp solution: If there is no URL provided then the text after `@link` will be returned.
 */
export const getReplacedTSLink = (str: string): string => {
  return str.replace(/\{@link[^}]*\}/g, match => {
    if (match.includes('http')) {
      // look for index of name divider
      const nameIndex = match.indexOf('|');
      // check if there is a name;
      const hasName = nameIndex > 0;
      // extract the link, if there is a name use that as the ending index, else use the length of the match
      const link = match.substring(
        7,
        hasName ? nameIndex - 1 : match.length - 1,
      );
      // extract the name if there is a name
      const name = hasName
        ? match.substring(nameIndex + 2, match.length - 1)
        : link;
      return `[${name}](${link})`; // Return the link HTML with the URL as text
    }

    // Return the link name with the @link extracted
    const linkNameMatch = match.match(/\{@link\s+([^}]+)\}/);
    return linkNameMatch ? linkNameMatch[1] : '';
  });
};
