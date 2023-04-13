import { useCallback, useEffect, useMemo, useState } from 'react';
import { CustomComponentDoc } from 'utils/tsdoc.utils';

import { LiveExampleStateContext } from './LiveExampleStateMachine/';
import { getInitialKnobValues, getKnobsArray, matchTypes } from './utils';

export function useKnobValues({
  StoryFn,
  componentName,
  meta,
  tsDoc,
}: LiveExampleStateContext & {
  tsDoc?: Array<CustomComponentDoc> | null;
}) {
  /**
   * Reload the knobs array
   */
  const knobsArray = useMemo(() => {
    if (meta && StoryFn && componentName && tsDoc) {
      return getKnobsArray({
        componentName,
        meta,
        StoryFn,
        tsDoc,
      });
    }

    // On loading complete
  }, [StoryFn, componentName, meta, tsDoc]);

  /**
   * KNOB VALUES
   */
  const [knobValues, setKnobs] = useState(
    getInitialKnobValues(knobsArray, meta, StoryFn),
  );

  useEffect(() => {
    if (knobsArray && meta && StoryFn) {
      setKnobs(getInitialKnobValues(knobsArray, meta, StoryFn));
    }

    // On loading complete
  }, [StoryFn, componentName, knobsArray, meta]);

  // Updates the value of a knob
  const updateKnobValue = useCallback(
    (propName: string, newValue: any) => {
      const value = matchTypes(knobValues?.[propName], newValue);
      setKnobs({ ...knobValues, [propName]: value });
    },
    [knobValues],
  );

  const resetKnobs = () => setKnobs({});

  return {
    knobsArray,
    knobValues,
    updateKnobValue,
    resetKnobs,
  };
}
