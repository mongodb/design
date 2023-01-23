import { PropItem } from 'react-docgen-typescript';
import {
  defaults,
  pickBy,
  isUndefined,
  isString,
  kebabCase,
  camelCase,
  snakeCase,
} from 'lodash';
import pascalcase from 'pascalcase';
import {
  CustomComponentDoc,
  findComponentDoc,
  getComponentPropsArray as getTSDocPropsArray,
  getDefaultValueValue,
} from 'utils/tsdoc.utils';
import { ComponentStoryFn, Meta } from '@storybook/react';
import React, { ReactNode } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import {
  KnobOptionType,
  KnobType,
  LiveExampleState,
  MetadataSources,
  TypeString,
} from './types';
import { InputType } from '@storybook/csf';

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
}: MetadataSources) => meta?.argTypes?.[name] ?? StoryFn?.argTypes?.[name];

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
      meta?.parameters?.controls?.exclude?.includes(TSDocProp.name);
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
  return (TSDocProp: PropItem): KnobType =>
    ({
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
    } as KnobType);
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

    const isExcludedByMeta: boolean =
      meta?.parameters?.controls?.exclude?.includes(input.name);

    return (
      !isIgnored && !isAlreadyInKnobs && !isControlNone && !isExcludedByMeta
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
        meta.args?.[knob.name] ??
        StoryFn.args?.[knob.name] ??
        createDefaultValue(knob);
    }

    return values;
  }, {} as Record<'string', any>);
  return defaults(knobDefaults, meta.args, StoryFn.args);
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
 * Returns example code for the given component data
 */
export function getStoryCode({
  componentName,
  meta,
  StoryFn,
  knobValues,
}: {
  componentName: string;
  meta?: Meta<any>;
  StoryFn?: ComponentStoryFn<any>;
  knobValues?: { [arg: string]: any };
}): string | undefined {
  const useStorySourceForComponents = ['typography'];

  const getStoryJSX = (element: ReactNode, displayName: string): string =>
    element
      ? reactElementToJSXString(element, {
          displayName: (child: ReactNode) =>
            // @ts-expect-error - correct type for `child` is too verbose
            child?.type?.displayName ?? pascalcase(displayName),
          showFunctions: true,
          showDefaultProps: true,
          useBooleanShorthandSyntax: false,
          useFragmentShortSyntax: true,
        })
      : '';

  const getStorySourceCode = (meta?: Meta<any>) => {
    if (meta && meta.parameters) {
      const {
        parameters: { default: defaultStoryName, storySource },
      } = meta;

      const locationsMap = defaultStoryName
        ? storySource.locationsMap[defaultStoryName]
        : Object.values(storySource.locationsMap)[0];

      const lines = (storySource.source as string).match(/^.*$/gm);
      const storyCode = lines
        ?.slice(locationsMap.startLoc.line - 1, locationsMap.endLoc.line - 1)
        .join('\n');
      return storyCode;
    }
  };

  /**
   * If this is the Typography component,
   * we use the original story code,
   * otherwise we convert the component to JSX
   */
  if (useStorySourceForComponents.includes(componentName)) {
    return getStorySourceCode(meta);
  } else {
    const renderedStory = StoryFn
      ? React.createElement(StoryFn, { ...knobValues })
      : undefined;
    return getStoryJSX(renderedStory, componentName);
  }
}

/**
 * Given component metadata
 * returns a LiveExampleState object
 */
export function getLiveExampleState({
  componentName,
  meta,
  stories,
  componentDoc,
}: {
  componentName: string;
  meta: Meta<any>;
  stories: { [key: string]: ComponentStoryFn<any> };
  componentDoc?: CustomComponentDoc;
}): LiveExampleState {
  const defaultStoryName = meta.parameters?.default ?? Object.keys(stories)[0];

  const StoryFn = defaultStoryName
    ? stories[defaultStoryName]
    : Object.values(stories)[0];

  const TSPropsArray: Array<KnobType> = getTSDocPropsArray(componentDoc)
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

  // Extract the default Knob Values, and include any props not explicitly included in TSDoc
  // This state object will be modified whenever a user interacts with a knob.
  const knobValues = pickBy(
    getInitialKnobValues(knobsArray, meta, StoryFn),
    // Filter out values that are explicitly undefined
    val => !isUndefined(val),
  );

  const storyCode = getStoryCode({
    componentName,
    meta,
    StoryFn,
    knobValues,
  });

  return {
    meta,
    knobValues,
    knobsArray,
    StoryFn,
    storyCode,
  };
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
