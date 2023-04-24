import { PropItem } from 'react-docgen-typescript';
import { InputType } from '@storybook/csf';
import { ComponentStoryFn, Meta } from '@storybook/react';
import {
  camelCase,
  defaults,
  isString,
  isUndefined,
  kebabCase,
  pickBy,
  snakeCase,
} from 'lodash';
import {
  CustomComponentDoc,
  getDefaultValueValue,
  getPropsArrayForComponentName,
} from 'utils/tsdoc.utils';

import {
  KnobOptionType,
  KnobType,
  MetadataSources,
  TypeString,
} from '../types';
import { LiveExampleContext } from '../useLiveExampleState';

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
  'setClosed',
  'setCollapsed',
  'shouldClose',
  'lgProviderBaseFontSize',
];

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
 * Utility to get the `argTypes` object for a given prop
 */
export const getSBInputType = ({
  meta,
  StoryFn,
  TSDocProp: { name },
}: MetadataSources) => StoryFn?.argTypes?.[name] ?? meta?.argTypes?.[name];

/**
 * Returns a filter function for PropItems
 * with `meta` and `StoryFn` in the closure
 */
function getPropItemFilterFn({
  meta,
  StoryFn,
}: Omit<MetadataSources, 'TSDocProp'>) {
  if (isUndefined(meta) || isUndefined(StoryFn)) return () => false;

  return (TSDocProp: PropItem) => {
    const isIgnored = ignoreProps.includes(TSDocProp.name);
    const metaSBInput = meta?.argTypes?.[TSDocProp.name];
    const localSBInput = StoryFn?.argTypes?.[TSDocProp.name];
    const isExcludedBySB: boolean =
      meta?.parameters?.controls?.exclude?.includes(TSDocProp.name) ||
      StoryFn?.parameters?.controls?.exclude?.includes(TSDocProp.name);
    const isControlNone =
      ['none', false].includes(metaSBInput?.control) ||
      ['none', false].includes(localSBInput?.control);
    return !isIgnored && !isExcludedBySB && !isControlNone;
  };
}

/**
 * Returns a map function that maps a TSDoc PropItem to KnobValue,
 * with `meta` and `StoryFn` in the closure
 */
function getPropItemToKnobTypeMapFn({
  meta,
  StoryFn,
}: Omit<MetadataSources, 'TSDocProp'>) {
  return (TSDocProp: PropItem): KnobType => {
    return {
      ...TSDocProp,
      name: TSDocProp.name,
      options: getKnobOptions({ meta, StoryFn, TSDocProp }),
      controlType: getControlType({ meta, StoryFn, TSDocProp }),
      description: getKnobDescription({
        meta,
        StoryFn,
        TSDocProp,
      }),
      defaultValue: getDefaultValue({
        meta,
        StoryFn,
        TSDocProp,
      }),
      args: getOtherControlArgs({ meta, StoryFn, TSDocProp }),
    } as KnobType;
  };
}

/**
 * Returns a filter function for SB InputTypes
 */
function getSBInputTypeFilterFn({
  meta,
  StoryFn,
  TSPropsArray,
}: Omit<MetadataSources, 'TSDocProp'> & { TSPropsArray: Array<KnobType> }) {
  if (isUndefined(meta) || isUndefined(StoryFn) || isUndefined(TSPropsArray))
    return () => false;

  return (input: InputType) => {
    if (isUndefined(input.name)) return false;
    const localInput: InputType | undefined = StoryFn?.argTypes?.[input.name];

    const isIgnored = ignoreProps.includes(input.name);
    const isAlreadyInKnobs = TSPropsArray.find(
      ({ name }) => name === input.name,
    );
    const isControlNone =
      ['none', false].includes(input.control) ||
      ['none', false].includes(localInput?.control);

    const isSBOnly: boolean =
      meta?.argTypes?.[input.name]?.displayedPlatforms === 'storybookOnly';
    const isExcludedByMeta: boolean =
      meta?.parameters?.controls?.exclude?.includes(input.name);

    return !(
      isIgnored ||
      isAlreadyInKnobs ||
      isControlNone ||
      isSBOnly ||
      isExcludedByMeta
    );
  };
}

/**
 * Maps a SB InputType object to a KnobType
 */
function mapSBArgTypeToKnobType(SBArg: Required<InputType>): KnobType {
  const controlType =
    (SBArg.type as TypeString) ??
    (isString(SBArg.control) ? SBArg.control : SBArg.control?.type);
  return {
    name: SBArg.name,
    description: SBArg.description,
    defaultValue: SBArg.defaultValue,
    controlType,
    required: false,
    type: {
      name: controlType,
    },
    options: SBArg.options ?? [],
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

      return 'enum';

    case 'string':
    case 'number':
      return type.name;

    default:
      return 'other';
  }
}

function getOtherControlArgs({
  meta,
  StoryFn,
  TSDocProp,
}: MetadataSources): object | undefined {
  const SBInputType = getSBInputType({ meta, StoryFn, TSDocProp });

  if (
    SBInputType &&
    SBInputType.control &&
    typeof SBInputType.control === 'object'
  ) {
    const { type, ...args } = SBInputType.control;
    return args;
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
}: MetadataSources): Array<KnobOptionType> {
  const type = TSDocProp.type;
  const SBInputType = getSBInputType({ meta, StoryFn, TSDocProp });

  const argOptions: Array<KnobOptionType> | undefined = valuesArrayFrom(
    SBInputType?.options,
  );

  const controlOptions: Array<KnobOptionType> | undefined = valuesArrayFrom(
    SBInputType?.control.options,
  );

  const options: Array<KnobOptionType> = (
    argOptions ??
    controlOptions ??
    type?.value?.map(({ value }) => value) ??
    []
  )
    .filter((opt: KnobOptionType) => !!opt)
    .map((value: KnobOptionType) => {
      // If the value is a number, or stringified number, return it as Number
      // otherwise, keep it as a string, and remove quotes

      if (typeof value === 'number') return value;
      value = value.replace(/["'`]/g, '');
      if (!isNaN(Number(value))) {
        return Number(value);
      } else {
        return value;
      }
    });

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
  const SBArg = StoryFn.args?.[TSDocProp.name] ?? meta.args?.[TSDocProp.name];
  const SBInputType = getSBInputType({ meta, StoryFn, TSDocProp });
  const SBDefaultValue = SBInputType?.defaultValue;
  return SBArg ?? SBDefaultValue ?? TSDefaultValue;
}

export function getInitialKnobValues(
  knobsArray: Array<KnobType>,
  meta: Meta<any>,
  StoryFn: ComponentStoryFn<any>,
) {
  const knobDefaults = knobsArray.reduce((values, knob) => {
    // If the type is an enum, and the defaultValue is the enum key, not the value
    // we need to get the enum value
    if (
      knob.controlType === 'enum' &&
      knob.defaultValue &&
      !knob.options.includes(knob.defaultValue)
    ) {
      const enumName = knob.type.raw;
      const enumValue = knob.defaultValue.replace(enumName, '');
      const defaultOption =
        knob.options.find(opt =>
          [
            // We don't have access to the enum mapping,
            // so we have to hope the option value matches the enum value
            enumValue.toLowerCase(),
            kebabCase(enumValue),
            camelCase(enumValue),
            snakeCase(enumValue),
          ].includes(opt),
        ) ?? createDefaultValue(knob);

      values[knob.name] = defaultOption;
    } else {
      values[knob.name] =
        knob.defaultValue ??
        StoryFn.args?.[knob.name] ??
        meta.args?.[knob.name] ??
        createDefaultValue(knob);
    }

    return values;
  }, {} as Record<'string', any>);

  // Extract the default Knob Values, and include any props not explicitly included in TSDoc
  // This state object will be modified whenever a user interacts with a knob.
  return pickBy(
    defaults(knobDefaults, meta.args, StoryFn.args),
    // Filter out values that are explicitly undefined
    val => !isUndefined(val),
  );
}

function createDefaultValue(knob: KnobType) {
  switch (knob.controlType) {
    case 'string':
    case 'text':
      return '';
    case 'number':
    case 'range':
      return 0;
    case 'boolean':
      return false;
    case 'array':
    case 'enum':
    case 'select':
    case 'radio':
      return knob.options.find(opt => opt === 'default') ?? knob.options[0];
  }
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

/**
 * Gets the default story from the meta
 */
export function getDefaultStoryFn(
  meta: Required<LiveExampleContext>['meta'],
  stories: { [key: string]: Required<LiveExampleContext>['StoryFn'] },
) {
  const defaultStoryName = meta.parameters?.default ?? Object.keys(stories)[0];
  return defaultStoryName
    ? stories[defaultStoryName]
    : Object.values(stories)[0];
}

/**
 * Returns an array of all knobs for the component
 */
export function getKnobsArray({
  componentName,
  meta,
  StoryFn,
  tsDoc,
}: {
  componentName: string;
  meta: Meta<any>;
  StoryFn: ComponentStoryFn<any>;
  tsDoc: Array<CustomComponentDoc> | null;
}) {
  const TSPropsArray: Array<KnobType> = getPropsArrayForComponentName(
    componentName,
    tsDoc,
  )
    // Filter out component props we don't want knobs for.
    // i.e. `@ignore` tags, excluded in SB.parameters.controls
    .filter(getPropItemFilterFn({ meta, StoryFn }))
    // Convert to custom KnobType by adding additional properties,
    // and updating other properties
    .map(getPropItemToKnobTypeMapFn({ meta, StoryFn }));

  const SBArgsArray: Array<KnobType> = Object.entries(
    { ...meta.argTypes, ...StoryFn.argTypes } ?? {},
  )
    .map(arg => ({ name: arg[0], ...arg[1] }))
    // Same filters as above, but also filter out values already in TSPropsArray
    .filter(getSBInputTypeFilterFn({ meta, StoryFn, TSPropsArray }))
    // Convert SB InputType to KnobType
    .map(mapSBArgTypeToKnobType);

  const knobsArray = [...TSPropsArray, ...SBArgsArray];

  return knobsArray;
}

/**
 * Ensures the types of prevVal and newVal match
 */
export function matchTypes<T extends any>(
  prevVal: T,
  newVal: any,
): T | undefined {
  if (typeof prevVal === typeof newVal) return newVal;

  switch (typeof prevVal) {
    case 'string':
      return String(newVal) as T;
    case 'number':
    case 'bigint':
      return Number(newVal) as T;
    case 'boolean':
      return Boolean(newVal) as T;
    case 'function':
    case 'object':
    case 'symbol':
      return newVal;
    default:
      return;
  }
}
