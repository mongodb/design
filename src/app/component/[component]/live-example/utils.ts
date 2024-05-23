import { StoryData } from '@/components/live-example';
import { mergeObjects } from '@/utils';
import { Meta } from '@storybook/react';

export const OMIT_PROPS = [
  'aria-controls',
  'as',
  'baseFontSize',
  'children',
  'className',
  'contentClassName',
  'defaultOpen',
  'href',
  'id',
  'inputValue',
  'loadingIndicator',
  'menuItems',
  'name',
  'onCurrentPageOptionChange',
  'onDismiss',
  'open',
  'primaryButton',
  'refButtonPosition',
  'shouldTooltipUsePortal',
  'stateNotifications',
  'timeout',
  'usePortal',
  'value',
  'trigger',
];

export function constructArgValues(argValues: Record<string, any>) {
  let returnObj: Record<string, any> = {};

  for (let key in argValues) {
    if (typeof argValues[key] !== 'object') {
      returnObj[key] = { value: argValues[key] };
    } else {
      returnObj[key] = argValues[key];
    }
  }

  return returnObj;
}

export function removeProps(object: Record<string, any>) {
  return Object.fromEntries(
    Object.entries(object).filter(([key]) => !OMIT_PROPS.includes(key)),
  );
}

export function createDefaultProps(meta: Meta, darkMode: boolean) {
  const combinedProps =
    meta && meta.args && meta.argTypes
      ? mergeObjects(constructArgValues(meta.args), meta.argTypes)
      : {};
  const filteredProps = removeProps(combinedProps);

  filteredProps.darkMode = { value: darkMode, control: 'boolean' };

  return filteredProps;
}
