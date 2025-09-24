'use client';

import { useState, useContext } from 'react';

import { css, cx } from '@emotion/css';
import { spacing, BaseFontSize, breakpoints } from '@leafygreen-ui/tokens';
import { Label, H2, Description } from '@leafygreen-ui/typography';
import { Select, Option, OptionGroup } from '@leafygreen-ui/select';
import TextArea from '@leafygreen-ui/text-area';
import { NumberInput } from '@leafygreen-ui/number-input';
import Button from '@leafygreen-ui/button';
import Icon from '@leafygreen-ui/icon';
import { Spinner } from '@leafygreen-ui/loading-indicator';
import { InfoSprinkle } from '@leafygreen-ui/info-sprinkle';
import Banner from '@leafygreen-ui/banner';

import SettingRow from './WriterSettingRow';
import { WriterContext } from './WriterProvider';
import { useMediaQuery } from '@/hooks';
import { CopyContextGuidelinesKeys } from '../../../api/rewrite/copyContextGuidelinesMap';

function createErrorMessage(statusCode?: number, defaultMessage?: string) {
  if (!statusCode) {
    return (
      defaultMessage || 'An unknown error occurred. Please try again later.'
    );
  }

  switch (statusCode) {
    case 400:
      return 'Bad Request: The request was invalid or cannot be otherwise served.';

    case 401:
      return 'Unauthorized: You must be logged in to make this request.';

    case 403:
      return 'Forbidden: You do not have permission to access this resource.';

    case 404:
      return 'Not Found: The requested resource could not be found.';

    case 422:
      return 'Unprocessable Content: The request was well-formed but was unable to be followed due to semantic errors.';

    case 500:
      return 'Internal Server Error: An error occurred on the server while processing your request.';

    case 502:
      return 'Bad Gateway: The server received an invalid response from the upstream server.';

    case 503:
      return 'Service Unavailable: The tool is unavailable and is currently unable to handle the request.';

    default:
      return defaultMessage || 'An unknown error occurred.';
  }
}

const groupsMap = {
  buttonsAndLinks: 'Buttons and Links',
  forms: 'Forms',
  hintsTipsAndAlerts: 'Hints, Tips, and Alerts',
  everythingElse: 'Everything Else',
} as const;

const options: Array<{
  value: CopyContextGuidelinesKeys | 'other';
  label: string;
  group: keyof typeof groupsMap;
}> = [
  { value: 'button', label: 'Button', group: 'buttonsAndLinks' } as const,
  {
    value: 'inlineLink',
    label: 'Inline Link',
    group: 'buttonsAndLinks',
  } as const,
  {
    value: 'standaloneLink',
    label: 'Standalone Link',
    group: 'buttonsAndLinks',
  } as const,
  {
    value: 'inputDescription',
    label: 'Input Description',
    group: 'forms',
  } as const,
  { value: 'inputLabel', label: 'Input Label', group: 'forms' } as const,
  {
    value: 'inputPlaceholder',
    label: 'Input Placeholder',
    group: 'forms',
  } as const,
  { value: 'errorMessage', label: 'Error Message', group: 'forms' } as const,
  {
    value: 'successMessage',
    label: 'Success Message',
    group: 'forms',
  } as const,
  {
    value: 'notifications',
    label: 'Notifications',
    group: 'hintsTipsAndAlerts',
  } as const,
  {
    value: 'tooltipsAndHelp',
    label: 'Tooltips and Help',
    group: 'hintsTipsAndAlerts',
  } as const,
  { value: 'other', label: 'Other', group: 'everythingElse' } as const,
] as const;

const headerRowStyles = css`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: ${spacing[600]}px;
`;

const textAreaStyles = css`
  & textarea {
    height: 260px;
  }
`;

const formStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const inputGroupStyles = css`
  margin-top: ${spacing[400]}px;
`;

const selectStyles = css`
  width: 220px;
`;

const buttonRowStyles = css`
  display: flex;
  justify-content: space-between;

  margin-top: ${spacing[600]}px;
  margin-bottom: ${spacing[800]}px;
`;

const settingsLabelStyles = css`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;

const infoSprinkleStyles = css`
  @media (max-width: ${breakpoints.Tablet}px) {
    display: none;
  }
`;

const inputDescriptionStyles = css`
  display: none;

  @media (max-width: ${breakpoints.Tablet}px) {
    display: block;
  }
`;

const submitButtonStyles = css`
  @media (max-width: ${breakpoints.Tablet}px) {
    width: 100%;
  }
`;

const inputStyles = css`
  @media (max-width: ${breakpoints.Tablet}px) {
    width: 100%;
  }
`;

export default function SplitLayout() {
  const {
    setResults,
    setIsLoading,
    isLoading,
    error,
    createFormError,
    clearFormError,
  } = useContext(WriterContext);
  const isSmallScreen = useMediaQuery([`(max-width: ${breakpoints.Tablet}px)`], {fallback: [false]})[0];
  const [copy, setCopy] = useState<string>('');
  const [copyContext, setCopyContext] = useState<
    CopyContextGuidelinesKeys | 'other' | null
  >(null);
  const [minLength, setMinLength] = useState<string | null>(null);
  const [maxLength, setMaxLength] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!copy) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/rewrite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          copy,
          copyContext,
          minLength,
          maxLength,
        }),
      });

      const parsedResponse = await response.json();

      if (response.status !== 200) {
        const errorMessage = createErrorMessage(
          response.status,
          parsedResponse.message,
        );

        console.error('Error response:', errorMessage);

        createFormError(response.status, errorMessage);
        return;
      }

      setResults(JSON.parse(parsedResponse.message).choices);
      setIsLoading(false);
    } catch (error) {
      console.log('Fetch error:', error);
      createFormError(500, 'An unknown error occurred.');
    }
  }

  function handleReset() {
    setCopy('');
    setCopyContext(null);
    setMinLength(null);
    setMaxLength(null);
    setResults([]);
    setIsLoading(false);
    clearFormError();
  }

  const minLengthDescription = "Due to the nature of the model, results may not meet the minimum character count you set. If you need to ensure a specific length, please check the output and adjust as necessary."
  const maxLengthDescription = "Due to the nature of the model, results may not meet the maximum character count you set. If you need to ensure a specific length, please check the output and adjust as necessary."

  return (
    <form className={formStyles} onSubmit={handleSubmit}>
      <div className={inputGroupStyles}>
        <div className={headerRowStyles}>
          <H2 as="h1">Rewrite Copy</H2>

          <div>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        </div>

        <TextArea
          baseFontSize={BaseFontSize.Body2}
          className={textAreaStyles}
          label="Interface Copy"
          onChange={e => setCopy(e.target.value)}
          value={copy}
        />

        <SettingRow>
          <Label
            baseFontSize={BaseFontSize.Body2}
            id="writing-context-select-label"
            htmlFor="writing-context-select"
            className={settingsLabelStyles}
          >
            Type of Copy
          </Label>

          <Select
            id="writing-context-select"
            aria-labelledby="writing-context-select-label"
            className={cx(inputStyles, selectStyles)}
            value={copyContext || ''}
            onChange={value => {
              setCopyContext(value as CopyContextGuidelinesKeys | 'other');
            }}
          >
            {(Object.keys(groupsMap) as Array<keyof typeof groupsMap>).map(
              group => (
                <OptionGroup key={group} label={groupsMap[group]}>
                  {options
                    .filter(option => option.group === group)
                    .map(({ value, label }) => (
                      <Option key={value} value={value}>
                        {label}
                      </Option>
                    ))}
                </OptionGroup>
              ),
            )}
          </Select>
        </SettingRow>

        <SettingRow>
          <Label
            baseFontSize={BaseFontSize.Body2}
            id="minimum-length-label"
            htmlFor="minimum-length-input"
            className={settingsLabelStyles}
          >
            Minimum Number of Characters

            {!isSmallScreen && (
              <InfoSprinkle>
                {minLengthDescription}
              </InfoSprinkle>
            )}
          </Label>

          <Description className={inputDescriptionStyles}>
            {minLengthDescription}
          </Description>

          <NumberInput
            id="minimum-length-input"
            aria-labelledby="minimum-length-label"
            className={inputStyles}
            onChange={e => setMinLength(e.target.value)}
            value={minLength ?? ''}
          />
        </SettingRow>

        <SettingRow>
          <Label
            baseFontSize={BaseFontSize.Body2}
            id="maximum-length-label"
            htmlFor="maximum-length-input"
            className={settingsLabelStyles}
          >
            Maximum Number of Characters

            {!isSmallScreen && (
              <InfoSprinkle>
                {maxLengthDescription}
              </InfoSprinkle>
            )}
          </Label>

          <Description className={inputDescriptionStyles}>
            {maxLengthDescription}
          </Description>

          <NumberInput
            id="maximum-length-input"
            aria-labelledby="maximum-length-label"
            className={inputStyles}
            onChange={e => setMaxLength(e.target.value)}
            value={maxLength ?? ''}
          />
        </SettingRow>
      </div>

      <div className={buttonRowStyles}>
        <div>
          {error.hasError && (
            <Banner variant="danger">
              <div
                className={css`
                  font-weight: bold;
                `}
              >
                Error {error.code ? error.code : ''}
              </div>

              {error.message}
            </Banner>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          className={submitButtonStyles}
          size={isSmallScreen ? 'large' : 'default'}
          isLoading={isLoading}
          loadingText="Generating..."
          loadingIndicator={<Spinner />}
          disabled={!copy}
          leftGlyph={<Icon glyph="Sparkle" />}
        >
          Generate Copy
        </Button>
      </div>
    </form>
  );
}
