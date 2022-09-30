import { PropItemType } from 'react-docgen-typescript';

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
