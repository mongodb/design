import { PropItemType } from 'react-docgen-typescript';
import { InputType, SBType, SBScalarType } from '@storybook/csf';

export type TypeString =
  | SBScalarType['name']
  | SBType['name']
  | 'text'
  | 'select'
  | 'range'
  | 'radio';

export function getControlType(
  type: PropItemType,
  SBArgType?: InputType,
): TypeString {
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
 * @returns Options for enum type knobs. Returns an empty array if there are no options
 */
export function getKnobOptions(
  type?: PropItemType,
  SBArgType?: InputType,
): Array<string> {
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