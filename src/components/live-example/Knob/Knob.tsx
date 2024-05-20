import { css, cx } from "@leafygreen-ui/emotion";
import { Option, Select } from "@leafygreen-ui/select";
import TextInput from "@leafygreen-ui/text-input";
import Toggle from "@leafygreen-ui/toggle";
import { DatePicker } from "@leafygreen-ui/date-picker";

import { KnobOptionType, KnobProps, KnobTypeObj } from "./types";

const inputStyle = css`
  min-width: 256px;
`;

export const Knob = ({
  propName,
  knobType: knobTypeProp,
  value,
  onChange,
  knobOptions,
}: KnobProps) => {
  const knobType =
    typeof knobTypeProp !== "string" ? knobTypeProp.type : knobTypeProp;

  switch (knobType) {
    case "string":
    case "text":
      return (
        <TextInput
          aria-label={propName}
          placeholder={propName}
          value={value}
          onChange={onChange}
          className={cx(inputStyle)}
        />
      );

    case "number":
    case "range":
      return (
        <TextInput
          aria-label={propName}
          type="number"
          placeholder={propName}
          value={value?.toString() ?? value}
          onChange={onChange}
          className={cx(inputStyle)}
          min={(knobTypeProp as KnobTypeObj)?.min ?? undefined}
          max={(knobTypeProp as KnobTypeObj)?.max ?? undefined}
        />
      );

    case "date":
      return (
        <DatePicker
          value={value}
          onDateChange={onChange}
          aria-label={propName}
        />
      );

    case "boolean":
      return (
        <Toggle
          checked={!!value as boolean}
          onChange={onChange}
          size="small"
          aria-label={propName}
        />
      );

    case "array":
    case "enum":
    case "select":
    case "radio": {
      if (knobOptions && knobOptions.length) {
        return (
          <Select
            value={value}
            onChange={onChange}
            className={cx(inputStyle)}
            aria-label={propName}
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
