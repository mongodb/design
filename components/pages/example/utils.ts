import { PropItem } from 'react-docgen-typescript';
import { defaults } from 'lodash';
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
  'onFocus',
  'onClose',
  'handleValidation',
  'aria-label',
  'aria-labelledby',
  'aria-controls',
  'popoverClassName',
  'popoverZIndex',
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
 * @returns the input array, or values of the input Record
 */
const valuesArrayFrom = (
  ArrayLike?: Array<any> | Record<string, any>,
): Array<any> | undefined =>
  ArrayLike
    ? Array.isArray(ArrayLike)
      ? ArrayLike
      : Object.values(ArrayLike)
    : undefined;

/**
 * A custom type based on TSDoc PropItem
 */
export type KnobType = PropItem & {
  controlType: TypeString;
  /**
   * For types with options. Set to an empty array for irrelevant types
   */
  options: Array<string>;
};

/**
 * Utility to get the `argTypes` object for a given prop
 */
export const getSBInputType = ({
  meta,
  StoryFn,
  TSDocProp: { name },
}: MetadataSources) => meta?.argTypes?.[name] ?? StoryFn?.argTypes?.[name];

export function getPropItemFilterFunction({
  meta,
  StoryFn,
}: Omit<MetadataSources, 'TSDocProp'>) {
  return (TSDocProp: PropItem) => {
    const isIgnored = ignoreProps.includes(TSDocProp.name);
    const SBInputType = getSBInputType({ meta, StoryFn, TSDocProp });
    const isExcludedBySB: boolean =
      meta?.parameters?.controls?.exclude?.includes(TSDocProp.name);
    const isControlNone = ['none', false].includes(SBInputType?.control);
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
  const SBInputType = getSBInputType({ meta, StoryFn, TSDocProp });

  if (SBInputType && SBInputType.control) {
    return SBInputType.control.type ?? SBInputType.control;
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
  const SBInputType = getSBInputType({ meta, StoryFn, TSDocProp });

  const argOptions: Array<any> | undefined = valuesArrayFrom(
    SBInputType?.options,
  )?.map(opt => opt?.toString());
  const controlOptions: Array<any> | undefined = valuesArrayFrom(
    SBInputType?.control.options,
  )?.map(opt => opt?.toString());

  const options: Array<string> = (
    argOptions ??
    controlOptions ??
    type?.value?.map(({ value }) => value.toString().replace(/"/g, '')) ??
    []
  ).filter((opt: string) => !!opt);

  return options;
}

/**
 * @returns the default value based on metadata from Storybook and TSDoc
 */
export function getDefaultValue({
  meta,
  StoryFn,
  TSDocProp,
}: MetadataSources): any {
  const TSDefaultValue = getDefaultValueValue(TSDocProp);
  const SBArg = meta.args?.[TSDocProp.name] ?? StoryFn.args?.[TSDocProp.name];
  const SBInputType = getSBInputType({ meta, StoryFn, TSDocProp });
  const SBDefaultValue = SBInputType?.defaultValue;
  return SBArg ?? SBDefaultValue ?? TSDefaultValue;
}

export function getInitialKnobValues(
  knobsArray: Array<KnobType>,
  meta: Meta<any>,
  StoryFn: ComponentStoryFn<any>,
) {
  const knobDefaults = knobsArray.reduce((values, { name, defaultValue }) => {
    values[name] = defaultValue;
    return values;
  }, {} as Record<'string', any>);
  return defaults(knobDefaults, meta.args, StoryFn.args);
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
