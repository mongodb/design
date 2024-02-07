import { kebabCase } from 'lodash';
import { isRequired } from 'utils/tsdoc.utils';

import { css } from '@leafygreen-ui/emotion';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import { HTMLElementProps } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import { spacing } from '@leafygreen-ui/tokens';
import Tooltip from '@leafygreen-ui/tooltip';
import { Body, Disclaimer } from '@leafygreen-ui/typography';

import { KnobType } from '../types';

import { Knob } from './Knob/Knob';

const knobRowWrapperStyle = (darkMode: boolean) => css`
  display: flex;
  width: 100%;
  min-height: ${spacing[5]}px;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing[4]}px;
  gap: ${spacing[2]}px;
  &:not(:first-child) {
    border-top: 1px solid ${darkMode ? palette.gray.dark2 : palette.gray.light2};
  }

  & * p {
    margin: unset;
  }
`;

const knobControlStyle = css`
  display: inline-flex;
  justify-content: end;
`;

const requiredFlagStyle = css`
  display: inline;
  padding-left: 1ch;
  color: ${palette.red.base};
  text-transform: uppercase;
`;

interface KnobRowProps extends HTMLElementProps<'div'> {
  knob: KnobType;
  knobValue?: any;
  setKnobValue: (key: string, value: any) => void;
}

export const KnobRow = ({ knob, knobValue, setKnobValue }: KnobRowProps) => {
  const { controlType, name, options, args } = knob;
  const { darkMode } = useDarkMode();

  const renderedKnob = (
    <Knob
      propName={name}
      knobType={controlType}
      knobOptions={options}
      value={knobValue}
      onChange={eventOrVal => {
        const value = eventOrVal.target?.value ?? eventOrVal;
        setKnobValue(name, value);
      }}
      className={knobControlStyle}
      aria-labelledby={`knob-${name}`}
      {...args}
    />
  );

  return (
    <div className={knobRowWrapperStyle(darkMode)}>
      <div>
        <Body
          baseFontSize={16}
          darkMode={darkMode}
          id={`${kebabCase()}-knob-${name}`}
        >
          <strong>{name}</strong>
          {isRequired(knob) && (
            <Disclaimer className={requiredFlagStyle}>(required)</Disclaimer>
          )}
        </Body>
      </div>
      {args?.disabled && args?.description ? (
        <Tooltip trigger={<div>{renderedKnob}</div>}>
          {args?.description}
        </Tooltip>
      ) : (
        renderedKnob
      )}
    </div>
  );
};
