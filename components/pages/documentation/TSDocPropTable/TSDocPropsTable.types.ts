import { ComponentDoc, PropItem as TSDocPropItem } from 'react-docgen-typescript';
import { isUndefined } from 'lodash';

export const InheritablePropGroup = [
  'HTMLAttributes',
  'DOMAttributes',
  'AriaAttributes',
  'SVGAttributes',
  'String',
] as const;
export type InheritablePropGroup = keyof typeof InheritablePropGroup;

export const isInheritableGroup = (_: never, key: any) =>
  InheritablePropGroup.includes(key) || key.endsWith('HTMLAttributes');

export type PropItem = TSDocPropItem & {tags?: Record<string, any>}
export type Props = Record<string, PropItem>
export type PropCategory = Record<string, Props>;

export type CustomComponentDoc = Omit<ComponentDoc, 'props'> & {
  props: PropCategory;
};

export interface PropGroup {
  groupName: string;
  props: Array<PropItem>;
}

export const isPropItem = (obj: any): obj is PropItem => {
  return (
    !isUndefined(obj.name) &&
    !isUndefined(obj.required) &&
    !isUndefined(obj.type) &&
    !isUndefined(obj.description) &&
    !isUndefined(obj.defaultValue)
  );
};
