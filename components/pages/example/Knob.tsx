import { css, cx } from '@leafygreen-ui/emotion';
import { HTMLElementProps } from '@leafygreen-ui/lib';
import { Option, Select } from '@leafygreen-ui/select';
import { SelectProps } from '@leafygreen-ui/select/dist/types';
import TextInput, { TextInputProps } from '@leafygreen-ui/text-input';
import { RadioBoxGroup, RadioBox } from '@leafygreen-ui/radio-box-group';
import Toggle from '@leafygreen-ui/toggle';
import { InputType, SBType, SBScalarType } from '@storybook/csf';
import { PropItem, PropItemType } from 'react-docgen-typescript';

const inputStyle = css`
  min-width: 256px;
`;

interface KnobProps extends HTMLElementProps<'input'> {
  argType?: InputType;
  prop: PropItem;
  value: any;
  onChange: (val: any) => void;
  darkMode?: boolean;
}

type TypeString =
  | SBScalarType['name']
  | SBType['name']
  | 'text'
  | 'select'
  | 'range'
  | 'radio';

export const Knob = ({
  argType,
  prop,
  value,
  onChange,
  ...rest
}: KnobProps) => {
  const controlType = getControlType(prop.type, argType);

  switch (controlType) {
    case 'string':
    case 'text':
      return (
        /// @ts-ignore
        <TextInput
          {...(rest as TextInputProps)}
          placeholder={prop.name}
          value={value}
          onChange={onChange}
          className={cx(inputStyle, rest.className)}
        />
      );

    case 'number':
    case 'range':
      return (
        /// @ts-ignore
        <TextInput
          {...(rest as TextInputProps)}
          type="number"
          placeholder={prop.name}
          value={value}
          onChange={onChange}
          className={cx(inputStyle, rest.className)}
        />
      );

    case 'boolean':
      return (
        /// @ts-expect-error
        <Toggle {...rest} checked={!!value as boolean} onChange={onChange} />
      );

    case 'array':
    case 'enum':
    case 'select':
    case 'radio': {
      const argOptions = argType?.options
        ? Array.isArray(argType.options)
          ? argType.options
          : Object.values(argType.options)
        : null;

      const options = (
        argOptions?.map(opt => opt?.toString()) ??
        prop?.type?.value?.map(({ value }) =>
          value.toString().replace(/"/g, ''),
        ) ??
        []
      ).filter(opt => !!opt);

      if (options.length <= 3) {
        return (
          <RadioBoxGroup
            {...rest}
            onChange={onChange}
            value={value}
            size="compact"
          >
            {options.map((opt: string) => (
              <RadioBox key={opt} value={opt}>
                {opt}
              </RadioBox>
            ))}
          </RadioBoxGroup>
        );
      }

      return (
        /// @ts-expect-error
        <Select
          {...(rest as SelectProps)}
          value={value}
          onChange={onChange}
          className={cx(inputStyle, rest.className)}
        >
          {options.map((opt: string) => (
            <Option key={opt} value={opt}>
              {opt}
            </Option>
          ))}
        </Select>
      );
    }

    default:
      return <>{controlType}</>;
  }
};

function getControlType(type: PropItemType, argType?: InputType): TypeString {
  if (argType && argType.control) {
    return argType.control.type ?? argType.control;
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
