import NextLink from 'next/link';

export const NextLinker = ({ href, children, ...props }) => (
  <NextLink href={href}>
    <a {...props}>{children}</a>
  </NextLink>
);
