import Link from 'next/link';
import { css, cx } from '@emotion/css';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import { color, spacing } from '@leafygreen-ui/tokens';

export function SideNavItem({
  children,
  className,
  active,
  href,
  ...rest
}: JSX.IntrinsicElements['li'] & {
  active?: boolean;
  href: string;
}) {
  const { theme } = useDarkMode();
  return (
    <Link
      href={href}
      className={cx(
        css`
          text-decoration: none;

          &:focus-visible,
          &:hover,
          &:focus,
          &:visited {
            text-decoration: none;
            outline: none;
          }
        `,
        css`
          position: relative;
          height: ${spacing[800]}px;

          display: flex;
          color: ${color[theme].text.primary.default};
          transition: background-color 150ms ease-in-out;
          cursor: pointer;

          &:before {
            content: '';
            position: absolute;
            background-color: transparent;
            left: 0px;
            top: 6px;
            bottom: 6px;
            width: 4px;
            border-radius: 0px 6px 6px 0px;
            transition: transform 150ms ease-in-out 0s;
            transform: scaleY(0.3);
          }

          &:hover {
            color: ${color[theme].text.primary.hover};
            background-color: ${color[theme].background.secondary.hover};
          }

          &:focus-visible {
            color: ${color[theme].text.primary.focus};
            background-color: ${color[theme].background.secondary.focus};

            &:before {
              background-color: ${color[theme].icon.info.default};
              transform: scaleY(1);
              left: 1px;
            }
          }
        `,
        {
          [css`
            background-color: ${color[theme].background.success.default};
            font-weight: bolder;

            &:before {
              background-color: ${color[theme].icon.success.default};
              transform: scaleY(1);
              left: 1px;
            }
          `]: active,
        },
        className,
      )}
    >
      <li
        {...rest}
        className={css`
          margin: 0;
          padding: ${spacing[200]}px ${spacing[400]}px;
        `}
      >
        {children}
      </li>
    </Link>
  );
}
