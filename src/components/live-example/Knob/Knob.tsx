import { css, cx } from '@leafygreen-ui/emotion';
import { Option, Select } from '@leafygreen-ui/select';
import TextInput from '@leafygreen-ui/text-input';
import Toggle from '@leafygreen-ui/toggle';
import { DatePicker } from '@leafygreen-ui/date-picker';

import { KnobOptionType, KnobProps, KnobTypeObj } from './types';

const inputStyle = css`
  min-width: 256px;
`;

const visuallyhidden = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export const Knob = ({
  propName,
  knobType: knobTypeProp,
  value,
  onChange,
  knobOptions,
  'aria-labelledby': ariaLabelledBy,
}: KnobProps) => {
  const knobType =
    typeof knobTypeProp !== 'string' ? knobTypeProp.type : knobTypeProp;

  switch (knobType) {
    case 'string':
    case 'text':
      return (
        <TextInput
          aria-labelledby={ariaLabelledBy}
          placeholder={propName}
          value={value}
          onChange={onChange}
          className={cx(inputStyle)}
        />
      );

    case 'number':
    case 'range':
      return (
        <TextInput
          aria-labelledby={ariaLabelledBy}
          type="number"
          placeholder={propName}
          value={value?.toString() ?? value}
          onChange={onChange}
          className={cx(inputStyle)}
          min={(knobTypeProp as KnobTypeObj)?.min ?? undefined}
          max={(knobTypeProp as KnobTypeObj)?.max ?? undefined}
        />
      );

    case 'date':
      return (
        <DatePicker
          value={value}
          onDateChange={onChange}
          aria-label={propName}
        />
      );

    case 'boolean':
      return (
        <Toggle
          checked={!!value as boolean}
          onChange={onChange}
          size="small"
          aria-label={propName}
        />
      );

    case 'array':
    case 'enum':
    case 'select': {
      if (knobOptions && knobOptions.length) {
        return (
          <Select
            allowDeselect={true}
            aria-label={propName}
            className={cx(inputStyle)}
            onChange={onChange}
            value={value}
          >
            {knobOptions.map((opt: KnobOptionType) => (
              <Option key={opt} value={opt}>
                {opt}
              </Option>
            ))}
          </Select>
        );
      }

      return <>{`${value}`}</>;
    }

    case 'radio': {
      if (knobOptions && knobOptions.length) {
        return (
          <Select
            allowDeselect={false}
            aria-label={propName}
            className={cx(inputStyle)}
            onChange={onChange}
            value={value}
          >
            {knobOptions.map((opt: KnobOptionType) => (
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
      return null;
  }
};
