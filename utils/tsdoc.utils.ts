import {
  ComponentDoc,
  PropItem,
  Props,
  PropItemType,
} from 'react-docgen-typescript';
import pascalcase from 'pascalcase';
import { isUndefined, isNull, omitBy, pickBy } from 'lodash';

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

export function isRequired(prop: PropItem): boolean {
  // @ts-expect-error
  return prop.required || !isUndefined(prop.tags?.required);
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
    .sort((a, z) => {
      if (isRequired(a) && !isRequired(z)) return -1;
      if (isRequired(z)) return 1;
      return a.name.localeCompare(z.name);
    });
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

export function getDefaultValueValue({
  name,
  defaultValue,
  type,
}: PropItem): any {
  if (isUndefined(defaultValue) || isNull(defaultValue)) return undefined;
  const value = defaultValue.value ?? defaultValue;

  /* eslint-disable no-fallthrough */
  switch (type.name) {
    case 'boolean':
      if (value === 'true') return true;
      if (value === 'false') return false;
      return value;

    case 'string':
    case 'text':
      return value?.toString() ?? value;

    case 'number':
      return Number(value);

    case 'enum': {
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
