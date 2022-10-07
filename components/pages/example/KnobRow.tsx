import { kebabCase } from 'lodash';
import { Subtitle } from '@leafygreen-ui/typography';
import { Knob } from './Knob';
import { spacing } from '@leafygreen-ui/tokens';
import { palette } from '@leafygreen-ui/palette';
import { Markdown } from 'components/Markdown';
import { css } from '@leafygreen-ui/emotion';
import { HTMLElementProps } from '@leafygreen-ui/lib';
import { PropItem } from 'react-docgen-typescript';
import { InputType } from '@storybook/csf';

import InlineDefinition from '@leafygreen-ui/inline-definition';

interface KnobRowProps extends HTMLElementProps<'div'> {
  componentProp: PropItem;
  darkMode: boolean;
  /**
   * Corresponds to the `argType` property on Storybook.Meta
   */
  SBArgType: InputType;
  knobValue?: any;
  setKnobValue: (key: string, value: any) => void;
}

export const KnobRow = ({
  componentProp,
  darkMode,
  SBArgType,
  knobValue,
  setKnobValue,
}: KnobRowProps) => {
  const { description } = SBArgType || componentProp;

  return (
    <div
      className={css`
        display: flex;
        width: 100%;
        min-height: ${spacing[5]}px;
        justify-content: space-between;
        align-items: center;
        padding: ${spacing[3]}px ${spacing[4]}px;
        gap: ${spacing[2]}px;

        &:not(:last-of-type) {
          border-bottom: 1px solid
            ${darkMode ? palette.gray.dark2 : palette.gray.light2};
        }

        & * p {
          margin: unset;
        }
      `}
    >
      <div>
        <Subtitle
          darkMode={darkMode}
          id={`${kebabCase()}-knob-${componentProp.name}`}
        >
          <InlineDefinition
            align="right"
            spacing={spacing[4]}
            darkMode={darkMode}
            definition={<Markdown darkMode={!darkMode}>{description}</Markdown>}
          >
            {componentProp.name}
          </InlineDefinition>
        </Subtitle>
      </div>
      <Knob
        SBArgType={SBArgType}
        componentProp={componentProp}
        value={knobValue}
        onChange={eventOrVal => {
          const value = eventOrVal.target?.value ?? eventOrVal;
          setKnobValue(componentProp.name, value);
        }}
        className={css`
          display: inline-flex;
          justify-content: end;
        `}
        aria-labelledby={`knob-${componentProp.name}`}
        darkMode={darkMode}
      />
    </div>
  );
};
