import { useMemo, useState } from 'react';
import TextArea from '@leafygreen-ui/text-area';
import { css } from '@leafygreen-ui/emotion';
import Code from '@leafygreen-ui/code';
import IconButton from '@leafygreen-ui/icon-button';
import Icon from '@leafygreen-ui/icon';
import { KnobProps } from './types';

const editModeWrapperStyle = css`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 40px;
  justify-items: center;
  align-items: center;
`;

const textAreaStyle = css`
  & > textarea {
    margin: unset;
    padding: 8px 12px;
  }
`;

/**
 * Enables users to edit & input valid JSON as a knob.
 *
 * A user can click the `edit` button to edit it the value
 * And then click `save` to set the value in the example
 */
export const RawKnob = ({
  propName,
  value,
  onChange,
  darkMode,
}: Pick<KnobProps, 'propName' | 'value' | 'onChange' | 'darkMode'>) => {
  const [editing, setEditing] = useState(false);
  const [isError, setError] = useState(false);
  const valueString = useMemo(() => {
    try {
      const val = JSON.stringify(value);
      return val;
    } catch {
      return '';
    }
  }, [value]);
  const [intermediateValue, setInterValue] = useState(valueString);

  const handleTextChange = ({ target }) => {
    const { value } = target;
    setInterValue(value);
    setError(false);
  };

  const handleSaveValue = () => {
    try {
      const json = JSON.parse(intermediateValue);
      onChange(json);
      setEditing(false);
    } catch (err) {
      setError(true);
    }
  };

  return editing ? (
    <div className={editModeWrapperStyle}>
      {/* @ts-expect-error */}
      <TextArea
        aria-label={propName}
        className={textAreaStyle}
        darkMode={darkMode}
        value={intermediateValue}
        onChange={handleTextChange}
        placeholder={propName}
        state={isError ? 'error' : 'none'}
        errorMessage={`${propName} must be valid JSON`}
      />
      <div
        className={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <IconButton aria-label={'Cancel'} onClick={() => setEditing(false)}>
          <Icon glyph="X" />
        </IconButton>
        <IconButton aria-label={`Save ${propName}`} onClick={handleSaveValue}>
          <Icon glyph="Checkmark" />
        </IconButton>
      </div>
    </div>
  ) : (
    <Code
      darkMode={darkMode}
      language="js"
      copyable={false}
      showCustomActionButtons
      customActionButtons={[
        <IconButton
          aria-label={`Edit ${propName}`}
          key="edit"
          onClick={() => {
            setEditing(true);
            setError(false);
          }}
        >
          <Icon glyph="Edit" />
        </IconButton>,
      ]}
    >
      {valueString}
    </Code>
  );
};
