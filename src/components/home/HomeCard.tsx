import React from 'react';
import { css } from '@emotion/css';
import Card from '@leafygreen-ui/card';
import { Body, H3, Link } from '@leafygreen-ui/typography';
import { Blog, Careers, Foundations, Resources } from '@/components/glyphs';
import { spacing } from '@leafygreen-ui/tokens';
import { useRouter } from 'next/navigation';

const imageMap = {
  Foundations: Foundations,
  Resources: Resources,
  Blog: Blog,
  Careers: Careers,
} as const;

type HomeCardProps = JSX.IntrinsicElements['div'] & {
  id: 'Foundations' | 'Resources' | 'Blog' | 'Careers';
  title?: string;
  description: string;
  link?: string;
};

export function HomeCard({
  id,
  description,
  link,
  title,
  ...rest
}: HomeCardProps) {
  const Graphic = imageMap[id];
  const router = useRouter();

  return (
    // @ts-expect-error properties ref incompatible
    <Card
      className={css`
        height: 350px;
      `}
      {...rest}
    >
      <H3
        className={css`
          margin-bottom: ${spacing[200]}px;
          position: relative;
        `}
      >
        {title}
      </H3>
      <Body baseFontSize={16}>{description}</Body>
      {link && (
        <Link
          as="button"
          baseFontSize={16}
          className={css`
            padding-top: ${24}px;
          `}
          arrowAppearance="persist"
          onClick={() => router.push(link)}
        >
          Learn More
        </Link>
      )}
      <Graphic
        aria-hidden
        className={css`
          position: absolute;
          bottom: 0;
          right: 0;
        `}
      />
    </Card>
  );
}
