'use client';

import { useEffect, useState } from 'react';
import { css } from '@emotion/css';
import Card from '@leafygreen-ui/card';
import { borderRadius, color, spacing } from '@leafygreen-ui/tokens';
import {
  StoryData,
  KnobProps,
  ComponentProps,
} from '@/components/live-example/types';
import { loadStories } from './server';
import { Knobs } from '@/components/live-example/Knobs';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import { createDefaultProps } from './utils';

export default function Page({ params }: { params: { component: string } }) {
  const { darkMode } = useDarkMode();
  const [data, setData] = useState<StoryData>();
  const [knobProps, setKnobProps] = useState<KnobProps>({});
  const [componentProps, setComponentProps] = useState<ComponentProps>({});

  // When the component changes, re-fetch the LiveExample data
  useEffect(() => {
    loadStories(params.component).then(response => {
      if (response) {
        setData(response);
      }
    });
  }, [params.component]);

  // When the story data changes, update the knobs
  useEffect(() => {
    if (data) {
      const normalizedProps = createDefaultProps(data.meta, darkMode);
      setKnobProps(normalizedProps);

      const propsWithValue: ComponentProps = {};
      // creates an object with all the prop names and the values
      for (let key in normalizedProps) {
        propsWithValue[key] = normalizedProps[key].value ?? undefined;
      }

      setComponentProps(propsWithValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  // If the Context DarkMode changes, update the knobs
  useEffect(() => {
    updateKnobValue('darkMode', darkMode);
  }, [darkMode]);

  const updateKnobValue = (propName: string, newValue: any) => {
    setKnobProps(props => {
      return {
        ...props,
        [propName]: {
          ...props[propName],
          value: newValue,
        },
      };
    });

    setComponentProps(props => {
      return {
        ...props,
        [propName]: newValue,
      };
    });
  };

  const LiveExample = data?.LiveExample;

  return LiveExample ? (
    <Card
      className={css`
        padding: 0;
      `}
    >
      <div
        className={css`
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 300px;
          border-radius: ${borderRadius[600]}px ${borderRadius[600]}px 0 0;
          background-color: ${color[componentProps?.darkMode ? 'dark' : 'light']
            .background.primary.default};
          padding: ${spacing[600]}px ${spacing[600]}px 0;
        `}
      >
        <div
          className={css`
            padding-left: ${spacing[600]}px;
            padding-right: ${spacing[600]}px;
            width: 100%;

            > div {
              width: auto;
              margin: 0 auto;
            }
          `}
        >
          {/* @ts-expect-error */}
          <LiveExample {...componentProps} />
        </div>
      </div>
      <div
        className={css`
          padding: ${spacing[600]}px;
        `}
      >
        <Knobs props={knobProps} updateKnobValue={updateKnobValue} />
      </div>
    </Card>
  ) : (
    <Card
      className={css`
        min-height: 300px;
      `}
    />
  );
}
