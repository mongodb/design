import { forwardRef, PropsWithChildren } from 'react';
import NextLink, { LinkProps } from 'next/link';

export const NextLinkWrapper = forwardRef<
  HTMLAnchorElement,
  PropsWithChildren<LinkProps>
>(({ href, children, ...props }, ref) => (
  <NextLink href={href} ref={ref}>
    <a {...props}>{children}</a>
  </NextLink>
));

NextLinkWrapper.displayName = 'NextLinkWrapper';
