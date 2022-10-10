import { PropItem } from 'react-docgen-typescript';
import { SBType, SBScalarType } from '@storybook/csf';
import { getDefaultValueValue } from 'utils/tsdoc.utils';
import { ComponentStoryFn, Meta } from '@storybook/react';

/**
 * A list of Prop names that should not appear in Knobs
 */
export const ignoreProps = [
  'className',
  'tooltipClassName',
  'contentClassName',
  'id',
  'onClick',
  'onChange',
  'onBlur',
  'handleValidation',
  'aria-label',
  'aria-labelledby',
  'aria-controls',
  'popoverClassName',
  'portalClassName',
  'portalContainer',
  'shouldTooltipUsePortal',
  'adjustOnMutation',
  'refEl',
  'scrollContainer',
  'setOpen',
  'shouldClose',
];

export type TypeString =
  | SBScalarType['name']
  | SBType['name']
  | 'text'
  | 'select'
  | 'range'
  | 'radio';

/**
 * Sources of prop metadata. Includes Storybook and TSDoc
 */
interface MetadataSources {
  meta: Meta<any>;
  StoryFn: ComponentStoryFn<any>;
  TSDocProp: PropItem;
}

/**
 * A custom type based on TSDoc PropItem
 */
export type KnobType = Omit<PropItem, 'type'> & {
  type: TypeString;
  /**
   * For types with options. Set to an empty array for irrelevant types
   */
  options: Array<string>;
};

/**
 * Utility to get the `argTypes` object for a given prop
 */
export const getSBArgType = ({ meta, StoryFn, TSDocProp: { name } }: MetadataSources) =>
meta?.argTypes?.[name] ?? StoryFn?.argTypes?.[name]

export function getPropItemFilterFunction({
  meta,
  StoryFn,
}: Omit<MetadataSources, 'TSDocProp'>) {
  return (TSDocProp: PropItem) => {
    const isIgnored = ignoreProps.includes(TSDocProp.name);
    const SBArgTypes = getSBArgType({ meta, StoryFn, TSDocProp });
    const isExcludedBySB: boolean =  meta?.parameters?.controls?.exclude?.includes(
      TSDocProp.name,
    );
    const isControlNone = ['none', false].includes(
      SBArgTypes?.control,
    );
    return !isIgnored && !isExcludedBySB && !isControlNone;
  };
}

/**
 * @returns A Type string based on metadata from Storybook and TSDoc
 */
export function getControlType({
  meta,
  StoryFn,
  TSDocProp,
}: MetadataSources): TypeString {
  const type = TSDocProp.type;
  const SBArgType = getSBArgType({ meta, StoryFn, TSDocProp });

  if (SBArgType && SBArgType.control) {
    return SBArgType.control.type ?? SBArgType.control;
  }

  switch (type.name) {
    case 'enum':
      switch (type.raw) {
        case 'boolean':
          return 'boolean';
        case 'ReactNode':
          return 'string';
      }

      return 'array';

    case 'string':
    case 'number':
      return type.name;

    default:
      return 'other';
  }
}

/**
 * @returns Options for enum type knobs, based on metadata from Storybook and TSDoc.
 * Returns an empty array if there are no options
 */
export function getKnobOptions({
  meta,
  StoryFn,
  TSDocProp,
}: MetadataSources): Array<string> {
  const type = TSDocProp.type;
  const SBArgType = getSBArgType({ meta, StoryFn, TSDocProp });

  const argOptions: Array<any> | undefined = SBArgType?.options
    ? Array.isArray(SBArgType?.options)
      ? SBArgType?.options
      : Object.values(SBArgType?.options)
    : undefined;

  const options: Array<string> = (
    argOptions?.map(opt => opt?.toString()) ??
    type?.value?.map(({ value }) => value.toString().replace(/"/g, '')) ??
    []
  ).filter((opt: string) => !!opt);

  return options;
}

/**
 * @returns the default value based on metadata from Storybook and TSDoc
 */
export function getInitialKnobValue({
  meta,
  StoryFn,
  TSDocProp,
}: MetadataSources): any {
  const TSDefaultValue = getDefaultValueValue(TSDocProp);
  const SBArg = meta.args?.[TSDocProp.name] ?? StoryFn.args?.[TSDocProp.name];
  const SBArgType = getSBArgType({ meta, StoryFn, TSDocProp });
  const SBDefaultValue = SBArgType?.defaultValue;
  return SBArg ?? SBDefaultValue ?? TSDefaultValue;
}

/**
 * @returns the prop description based on metadata from Storybook and TSDoc
 */
export function getKnobDescription({
  meta,
  StoryFn,
  TSDocProp,
}: MetadataSources) {
  return (
    (meta.argTypes?.[TSDocProp.name] || StoryFn.argTypes?.[TSDocProp.name])
      ?.description ?? TSDocProp.description
  );
}
