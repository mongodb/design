import { css } from '@emotion/css';
import { cx } from '@leafygreen-ui/emotion';
import { useViewportSize } from '@leafygreen-ui/hooks';
import { MongoDBLogo } from '@leafygreen-ui/logo';
import { palette } from '@leafygreen-ui/palette';
import { breakpoints } from '@leafygreen-ui/tokens';
import { spacing } from '@leafygreen-ui/tokens';
import { mq } from 'utils/mediaQuery';

const footerContainerStyle = css`
  border-top: 1px solid ${palette.gray.light2};
  width: 100%;

  ${mq({
    marginTop: ['0px', `${spacing[7]}px`],
    paddingLeft: ['0px', `${spacing[9]}px`],
  })}
`;

const desktopFooterContainerStyle = css`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-right: ${spacing[5]}px;
  padding-top: ${spacing[4]}px;
`;

const mobileFooterContainerStyle = css`
  display: block;
  padding-top: ${spacing[5]}px;

  > div {
    display: block;
  }

  a {
    display: block;
  }
`;

const linksContainer = css`
  display: flex;
  flex-direction: column;
  color: ${palette.gray.dark2};
  // Pixel-pushed for baseline alignment with logo
  margin-top: 5px;

  ${mq({
    marginLeft: [`${spacing[4]}px`, `${spacing[6]}px`],
    marginRight: [`${spacing[4]}px`, `${spacing[6]}px`],
  })}
`;

const mobileLinksContainer = css`
  margin-left: 0;
  margin-top: ${spacing[5]}px;
`;

const linkStyle = css`
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  color: ${palette.gray.dark2};

  & + & {
    margin-top: ${spacing[3]}px;
  }

  &:hover {
    color: ${palette.gray.dark3};
  }
`;

const trademarkStyle = css`
  margin-top: ${spacing[6]}px;
  margin-bottom: ${spacing[4]}px;
  font-size: 12px;
  color: ${palette.gray.dark1};
`;

function FooterLink({ href, children }: JSX.IntrinsicElements['a']) {
  const linkProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
  } as const;

  return (
    <a href={href} className={linkStyle} {...linkProps}>
      {children}
    </a>
  );
}

function Footer() {
  const viewport = useViewportSize();
  const isTouchDevice =
    viewport !== null && viewport.width < breakpoints.Tablet;
  return (
    <div
      role="contentinfo"
      className={cx([
        footerContainerStyle,
        {
          [desktopFooterContainerStyle]: !isTouchDevice,
          [mobileFooterContainerStyle]: isTouchDevice,
        },
      ])}
    >
      <a href="https://mongodb.com" target="_blank" rel="noopener noreferrer">
        <MongoDBLogo height={spacing[4]} aria-hidden="true" />
      </a>
      <div
        className={cx([
          linksContainer,
          {
            [mobileLinksContainer]: isTouchDevice,
          },
        ])}
      >
        <FooterLink href="https://www.mongodb.com/blog/post/meet-our-product-design-team-part-1">
          About design at MongoDB
        </FooterLink>
        <FooterLink href="https://www.mongodb.com/blog">Blog</FooterLink>
        <FooterLink href="https://www.mongodb.com/blog/channel/events">
          Events
        </FooterLink>
        <FooterLink href="https://github.com/mongodb/leafygreen-ui">
          GitHub
        </FooterLink>
        <FooterLink href="https://www.mongodb.com/careers">Careers</FooterLink>
        <p className={trademarkStyle}>© 2021 MongoDB, Inc.</p>
      </div>
    </div>
  );
}

Footer.displayName = 'Footer';

export default Footer;
