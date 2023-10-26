import { MouseEventHandler, useState } from 'react';
import { Transition } from 'react-transition-group';

import Button from '@leafygreen-ui/button';
import Icon from '@leafygreen-ui/icon';
import { palette } from '@leafygreen-ui/palette';

import {
  LiveExampleContext,
  LiveExampleStateReturnValue,
} from '../useLiveExampleState';

import { KnobRow } from './KnobRow';
import {
  exampleCodeButtonRowStyle,
  exampleCodeButtonStyle,
} from './KnobsTable.styles';

interface KnobsTableProps {
  showCode: boolean;
  codeExampleEnabled: boolean;
  handleShowCodeClick: MouseEventHandler;
  knobsArray: Required<LiveExampleContext>['knobsArray'];
  knobValues: Required<LiveExampleContext>['knobValues'];
  updateKnobValue: LiveExampleStateReturnValue['updateKnobValue'];
}

export const KnobsTable = ({
  showCode,
  codeExampleEnabled,
  handleShowCodeClick,
  knobsArray,
  knobValues,
  updateKnobValue,
}: KnobsTableProps) => {
  const [showKnobs, setShowKnobs] = useState<boolean>(false);
  const toggleKnobs = () => setShowKnobs(s => !s);

  return (
    <div id="knobs">
      {codeExampleEnabled && (
        <div className={exampleCodeButtonRowStyle}>
          <Button
            className={exampleCodeButtonStyle}
            variant="default"
            size="xsmall"
            onClick={toggleKnobs}
            leftGlyph={
              <Icon glyph={showKnobs ? 'VisibilityOff' : 'Visibility'} />
            }
          >
            {showKnobs ? 'Hide' : 'Show'} Controls
          </Button>
        </div>
      )}
      {showKnobs && (
        <Transition in={showKnobs} timeout={200}>
          <div
            style={{
              maxHeight: '300px',
              overflowY: 'scroll',
              borderTop: '1px solid',
              borderColor: palette.gray.light2,
            }}
          >
            {knobsArray.map(knob => (
              <KnobRow
                key={knob.name}
                knob={knob}
                knobValue={knobValues?.[knob.name]}
                setKnobValue={updateKnobValue}
              />
            ))}
          </div>
        </Transition>
      )}
    </div>
  );
};
