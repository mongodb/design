import { kebabCase } from 'lodash';
import { Subtitle } from '@leafygreen-ui/typography';
import { Knob } from './Knob';
import { spacing } from '@leafygreen-ui/tokens';
import { palette } from '@leafygreen-ui/palette';
import { Markdown } from 'components/Markdown';
import { css } from '@leafygreen-ui/emotion';
import { HTMLElementProps } from '@leafygreen-ui/lib';

import InlineDefinition from '@leafygreen-ui/inline-definition';
import { TypeString } from './utils';

const knobRowWrapperStyle = (darkMode: boolean) => css`
  display: flex;
  width: 100%;
  min-height: ${spacing[5]}px;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing[3]}px ${spacing[4]}px;
  gap: ${spacing[2]}px;
  border-top: 1px solid ${darkMode ? palette.gray.dark2 : palette.gray.light2};

  & * p {
    margin: unset;
  }
`;

const knobControlStyle = css`
  display: inline-flex;
  justify-content: end;
`;

interface KnobRowProps extends HTMLElementProps<'div'> {
  propName: string;
  knobType: TypeString;
  knobOptions: Array<string>;
  darkMode: boolean;
  description: string;
  knobValue?: any;
  setKnobValue: (key: string, value: any) => void;
}

export const KnobRow = ({
  propName,
  knobType,
  knobOptions,
  darkMode,
  description,
  knobValue,
  setKnobValue,
}: KnobRowProps) => {
  return (
    <div className={knobRowWrapperStyle(darkMode)}>
      <div>
        <Subtitle darkMode={darkMode} id={`${kebabCase()}-knob-${propName}`}>
          <InlineDefinition
            align="right"
            spacing={spacing[4]}
            darkMode={darkMode}
            definition={<Markdown darkMode={!darkMode}>{description}</Markdown>}
          >
            {propName}
          </InlineDefinition>
        </Subtitle>
      </div>
      <Knob
        propName={propName}
        knobType={knobType}
        knobOptions={knobOptions}
        value={knobValue}
        onChange={eventOrVal => {
          const value = eventOrVal.target?.value ?? eventOrVal;
          setKnobValue(propName, value);
        }}
        className={knobControlStyle}
        aria-labelledby={`knob-${propName}`}
        darkMode={darkMode}
      />
    </div>
  );
};
