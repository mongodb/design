import NextLink from 'next/link';

export const NextLinkWrapper = ({ href, children, ...props }) => (
  <NextLink href={href}>
    <a {...props}>{children}</a>
  </NextLink>
);
