import { css, cx } from '@leafygreen-ui/emotion';
import { HTMLElementProps } from '@leafygreen-ui/lib';
import { Option, Select } from '@leafygreen-ui/select';
import { SelectProps } from '@leafygreen-ui/select/dist/types';
import TextInput, { TextInputProps } from '@leafygreen-ui/text-input';
import { RadioBoxGroup, RadioBox } from '@leafygreen-ui/radio-box-group';
import Toggle from '@leafygreen-ui/toggle';
import { TypeString } from './utils';

const inputStyle = css`
  min-width: 256px;
`;

interface KnobProps extends HTMLElementProps<'input'> {
  propName: string;
  knobType: TypeString;
  knobOptions: Array<string>;
  value: any;
  onChange: (val: any) => void;
  darkMode?: boolean;
}

export const Knob = ({
  propName,
  knobType,
  value,
  onChange,
  knobOptions,
  ...rest
}: KnobProps) => {
  switch (knobType) {
    case 'string':
    case 'text':
      return (
        /// @ts-ignore
        <TextInput
          {...(rest as TextInputProps)}
          placeholder={propName}
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
          placeholder={propName}
          value={value?.toString() ?? value}
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
      if (knobOptions) {
        if (knobOptions.length <= 3) {
          return (
            <RadioBoxGroup
              {...rest}
              onChange={onChange}
              value={value}
              size="compact"
            >
              {knobOptions.map((opt: string) => (
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
            {knobOptions.map((opt: string) => (
              <Option key={opt} value={opt}>
                {opt}
              </Option>
            ))}
          </Select>
        );
      }

      return <>knobType</>;
    }

    default:
      return <>{knobType}</>;
  }
};
