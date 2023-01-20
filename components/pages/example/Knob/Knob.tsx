import { css, cx } from '@leafygreen-ui/emotion';
import { Option, Select } from '@leafygreen-ui/select';
import { SelectProps } from '@leafygreen-ui/select/dist/types';
import TextInput, { TextInputProps } from '@leafygreen-ui/text-input';
import { RadioBoxGroup, RadioBox } from '@leafygreen-ui/radio-box-group';
import Toggle from '@leafygreen-ui/toggle';
import { RadioBoxOverrideStyle } from './Knob.styles';
import { KnobProps } from './types';
import { RawKnob } from './RawKnob';

const inputStyle = css`
  min-width: 256px;
`;

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
        <TextInput
          {...(rest as TextInputProps)}
          aria-label={propName}
          placeholder={propName}
          value={value}
          onChange={onChange}
          className={cx(inputStyle, rest.className)}
        />
      );

    case 'number':
    case 'range':
      return (
        <TextInput
          {...(rest as TextInputProps)}
          aria-label={propName}
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
        <Toggle
          {...rest}
          checked={!!value as boolean}
          onChange={onChange}
          size="small"
        />
      );

    case 'array':
    case 'enum':
    case 'select':
    case 'radio': {
      if (knobOptions && knobOptions.length) {
        if (knobOptions.length <= 3) {
          return (
            <RadioBoxGroup
              {...rest}
              onChange={onChange}
              value={value}
              size="compact"
            >
              {knobOptions.map((opt: string) => (
                <RadioBox
                  className={RadioBoxOverrideStyle}
                  key={opt}
                  value={opt}
                >
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

      return <>{`${value}`}</>;
    }

    default:
      return <RawKnob propName={propName} value={value} onChange={onChange} />;
  }
};
