import { ComponentDoc, PropItem, Props, PropItemType } from 'react-docgen-typescript';
import { isUndefined, omitBy, pickBy } from 'lodash';

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
export type CustomComponentDoc = Omit<ComponentDoc, 'props'> & {
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

export const getComponentProps = (props?: PropCategories): Array<PropItem> => {
  return Object.values(omitBy(props, isInheritableGroup))
    .flatMap(Object.values)
    .sort((a, z) => {
      if (isRequired(a) && !isRequired(z)) return -1;
      if (isRequired(z)) return 1;
      return a.name.localeCompare(z.name);
    });
};

export const getInheritedProps = (props: PropCategories): Array<PropGroup> => {
  return Object.entries(
    pickBy(props, isInheritableGroup),
  ).map(([groupName, props]: [string, Props]) => ({
    groupName,
    props: Object.values(props).flatMap(prop => prop),
  }));
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

export function getDefaultValueString(defaultValue: PropItem['defaultValue']): string {
  if (!defaultValue) {
    return '—';
  }

  if (isUndefined(defaultValue.value)) {
    return JSON.stringify(defaultValue);
  }

  return defaultValue.value.toString();
}
