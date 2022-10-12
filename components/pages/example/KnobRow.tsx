import { kebabCase } from 'lodash';
import { Subtitle } from '@leafygreen-ui/typography';
import { Knob } from './Knob';
import { spacing } from '@leafygreen-ui/tokens';
import { palette } from '@leafygreen-ui/palette';
import { Markdown } from 'components/Markdown';
import { css } from '@leafygreen-ui/emotion';
import { HTMLElementProps } from '@leafygreen-ui/lib';

import InlineDefinition from '@leafygreen-ui/inline-definition';
import { KnobType, TypeString } from './utils';
import { PropTooltipContent } from 'components/PropTooltipContent';
import { PropItem } from 'react-docgen-typescript';

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
  knob: KnobType;
  darkMode: boolean;
  knobValue?: any;
  setKnobValue: (key: string, value: any) => void;
}

export const KnobRow = ({
  knob,
  darkMode,
  knobValue,
  setKnobValue,
}: KnobRowProps) => {
  const { controlType, name, options } = knob;

  return (
    <div className={knobRowWrapperStyle(darkMode)}>
      <div>
        <Subtitle darkMode={darkMode} id={`${kebabCase()}-knob-${name}`}>
          <InlineDefinition
            align="right"
            spacing={spacing[4]}
            darkMode={darkMode}
            definition={<PropTooltipContent propItem={knob as PropItem} />}
          >
            {name}
          </InlineDefinition>
        </Subtitle>
      </div>
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
        darkMode={darkMode}
      />
    </div>
  );
};
