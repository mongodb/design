import { forwardRef, PropsWithChildren } from 'react';
import NextLink, { LinkProps } from 'next/link';

export const NextLinkWrapper = forwardRef<
  HTMLAnchorElement,
  PropsWithChildren<LinkProps>
>(({ href, children, ...props }, ref) => (
  <NextLink href={href} ref={ref} {...props}>
    {children}
  </NextLink>
));

NextLinkWrapper.displayName = 'NextLinkWrapper';
