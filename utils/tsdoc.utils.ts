import { ComponentDoc, PropItem, Props } from 'react-docgen-typescript';
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

export const getComponentProps = (props: PropCategories): Array<PropItem> => {
  const _componentProps: PropCategories = omitBy(props, isInheritableGroup);
  return Object.values(_componentProps)
    .flatMap((prop: Props) => Object.values(prop))
    .sort((a, z) => a.name.localeCompare(z.name));
}

export const getInheritedProps = (props: PropCategories): Array<PropGroup> => {
  const _inheritedProps: PropCategories = pickBy(props, isInheritableGroup);

  return Object.entries(_inheritedProps).map(
    ([groupName, props]: [string, Props]) => {
      return {
        groupName,
        props: Object.values(props).flatMap(prop => prop),
      };
    },
  );
}