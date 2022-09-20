import { kebabCase } from 'lodash';
import { Subtitle } from '@leafygreen-ui/typography';
import { Knob } from './Knob';
import { spacing } from '@leafygreen-ui/tokens';
import { palette } from '@leafygreen-ui/palette';
import { Markdown } from 'components/Markdown';
import { css } from '@leafygreen-ui/emotion';
import { HTMLElementProps } from '@leafygreen-ui/lib';
import { PropItem } from 'react-docgen-typescript';
import { Meta } from '@storybook/react';
import InlineDefinition from '@leafygreen-ui/inline-definition';

interface KnobRowProps extends HTMLElementProps<'div'> {
  prop: PropItem;
  darkMode: boolean;
  meta?: Meta<any>;
  args?: { [arg: string]: any };
  setArg: (key: string, value: any) => void;
}

export const KnobRow = ({
  meta,
  prop,
  args,
  darkMode,
  setArg,
}: KnobRowProps) => {
  const argType = meta?.argTypes?.[prop.name];
  const knobValue = args?.[prop.name] ?? prop.defaultValue;

  return (
    <div
      key={prop.name}
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
        <Subtitle darkMode={darkMode} id={`${kebabCase()}-knob-${prop.name}`}>
          <InlineDefinition
            align="right"
            spacing={spacing[4]}
            darkMode={darkMode}
            definition={
              <Markdown darkMode={!darkMode}>
                {argType?.description || prop.description}
              </Markdown>
            }
          >
            {prop.name}
          </InlineDefinition>
        </Subtitle>
      </div>
      <Knob
        argType={argType}
        prop={prop}
        value={knobValue}
        onChange={arg => {
          const value = arg.target?.value ?? arg;
          setArg(prop.name, value);
        }}
        className={css`
          display: inline-flex;
          justify-content: end;
        `}
        aria-labelledby={`knob-${prop.name}`}
        darkMode={darkMode}
      />
    </div>
  );
};
