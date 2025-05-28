'use client';

import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/data';

import { css } from '@emotion/css';
import { Body, H1 } from '@leafygreen-ui/typography';
import { spacing } from '@leafygreen-ui/tokens';
import { ComponentCard, HomeCard } from '@/components/home';

import type { Schema } from '../../amplify/data/resource';
import outputs from '../../amplify_outputs.json';
import Button from '@leafygreen-ui/button';

Amplify.configure(outputs);

export default function Home() {
  const amplifyClient = generateClient<Schema>();
  console.log('outputs', outputs);
  console.log('amplifyClient', amplifyClient);

  const CLICK = () => {
    amplifyClient.queries
      .chatbot({ name: 'MongoDB' })
      .then(response => {
        console.log('Response from Amplify:', response);
      })
      .catch(error => {
        console.error('Error from Amplify:', error);
      });
  };

  return (
    <div
      className={css`
        min-height: 100vh;
      `}
    >
      <div
        className={css`
          margin-bottom: ${spacing[1000]}px;
        `}
      >
        <H1>LeafyGreen Design System</H1>
        <Body baseFontSize={16}>
          MongoDB’s open-source design system for building intuitive, and
          beautiful experiences
        </Body>
      </div>

      <Button onClick={CLICK}>CLICK ME</Button>

      <div
        className={css`
          display: flex;
          flex-direction: column;
          gap: ${spacing[600]}px;
          max-width: 1152px;
        `}
      >
        <ComponentCard />

        <HomeCard
          key="Foundations"
          title="Foundations"
          description="These define broader guidance on typography, iconography, and our
            color palette."
          link="/foundations/grid"
        />

        <HomeCard
          key="Resources"
          title="Resources"
          description=" Resources include guidelines on accessibility, and icon creation."
          link="/resources/accessibility"
        />
      </div>
    </div>
  );
}
