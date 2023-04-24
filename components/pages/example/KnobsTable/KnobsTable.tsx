import { MouseEventHandler } from 'react';

import Button from '@leafygreen-ui/button';

import { KnobRow } from '../KnobRow/KnobRow';
import {
  LiveExampleContext,
  LiveExampleStateReturnValue,
} from '../useLiveExampleState';

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
  return (
    <div id="knobs">
      {codeExampleEnabled && (
        <div className={exampleCodeButtonRowStyle}>
          <Button
            className={exampleCodeButtonStyle}
            variant="default"
            size="xsmall"
            onClick={handleShowCodeClick}
          >
            {showCode ? 'Hide' : 'Show'} Code
          </Button>
        </div>
      )}
      {knobsArray.map(knob => (
        <KnobRow
          key={knob.name}
          knob={knob}
          knobValue={knobValues?.[knob.name]}
          setKnobValue={updateKnobValue}
        />
      ))}
    </div>
  );
};
