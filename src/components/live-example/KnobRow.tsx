import { kebabCase } from "lodash";

import { css } from "@leafygreen-ui/emotion";
import { useDarkMode } from "@leafygreen-ui/leafygreen-provider";
import { HTMLElementProps, Theme } from "@leafygreen-ui/lib";
import { spacing, color } from "@leafygreen-ui/tokens";
import { Body } from "@leafygreen-ui/typography";

import { Knob } from "./Knob/Knob";
import { Knobs } from "./types";

const knobRowWrapperStyle = (theme: Theme) => css`
  display: flex;
  width: 100%;
  min-height: ${spacing[800]}px;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing[600]}px;
  gap: ${spacing[200]}px;
  border-top: 1px solid ${color[theme].border.secondary.default};

  & * p {
    margin: unset;
  }
`;

const knobControlStyle = css`
  display: inline-flex;
  justify-content: end;
`;

interface KnobRowProps extends HTMLElementProps<"div"> {
  knob: {
    control?: Knobs;
    name: string;
    options?: [];
  };
  knobValue?: any;
  setKnobValue: (key: string, value: any) => void;
}

export const KnobRow = ({ knob, knobValue, setKnobValue }: KnobRowProps) => {
  const { control = "text", name, options = [] } = knob;
  const { theme } = useDarkMode();

  if (control === "none") return null;

  const renderedKnob = (
    <Knob
      propName={name}
      knobType={control}
      knobOptions={options}
      value={knobValue}
      onChange={(eventOrVal) => {
        const value = eventOrVal.target?.value ?? eventOrVal;
        setKnobValue(name, value);
      }}
      className={knobControlStyle}
      aria-labelledby={`knob-${name}`}
    />
  );

  return (
    <div className={knobRowWrapperStyle(theme)}>
      <div>
        <Body baseFontSize={16} id={`${kebabCase()}-knob-${name}`}>
          <strong>{name}</strong>
        </Body>
      </div>
      {renderedKnob}
    </div>
  );
};
