import { PropItem, PropItemType } from 'react-docgen-typescript';
import { isUndefined } from 'lodash';

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
  if (!defaultValue) {
    return '—';
  }

  if (isUndefined(defaultValue.value)) {
    return JSON.stringify(defaultValue);
  }

  return defaultValue.value.toString();
}
