import { css, cx } from '@leafygreen-ui/emotion';
import { HTMLElementProps } from '@leafygreen-ui/lib';
import { Option, Select } from '@leafygreen-ui/select';
import TextInput from '@leafygreen-ui/text-input';
// import TextArea from '@leafygreen-ui/text-area';
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
  | 'range';

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
        <TextInput
          {...rest}
          placeholder={prop.name}
          optional={!prop.required}
          value={value}
          onChange={onChange}
          className={cx(inputStyle, rest.className)}
        />
      );

    case 'number':
    case 'range':
      return (
        <TextInput
          {...rest}
          type="number"
          placeholder={prop.name}
          optional={!prop.required}
          value={value}
          onChange={onChange}
          className={cx(inputStyle, rest.className)}
        />
      );

    case 'boolean':
      return (
        <Toggle {...rest} checked={!!value as boolean} onChange={onChange} />
      );

    case 'array':
    case 'enum':
    case 'select': {
      return (
        /// @ts-ignore
        <Select
          {...rest}
          value={value}
          onChange={onChange}
          className={cx(inputStyle, rest.className)}
        >
          {argType?.options
            ? argType?.options.map((opt: string) => (
                <Option key={opt} value={opt}>
                  {opt}
                </Option>
              ))
            : prop.type?.value?.map(({ value }) => (
                <Option key={value} value={value.replace(/"/g, '')}>
                  {value.replace(/"/g, '')}
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
      }

      return 'array';

    case 'string':
    case 'number':
      return type.name;

    default:
      return 'other';
  }
}
