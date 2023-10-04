import styled from '@emotion/styled';
import { useAppContext } from 'contexts/AppContext';
import kebabCase from 'lodash/kebabCase';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { ComponentFields } from 'utils/ContentStack/types';

import { NextLinkWrapper } from 'components/NextLinkWrapper';

import Icon from '@leafygreen-ui/icon';
import { palette } from '@leafygreen-ui/palette';
import { SideNavGroup, SideNavItem } from '@leafygreen-ui/side-nav';
import { spacing } from '@leafygreen-ui/tokens';
import Tooltip from '@leafygreen-ui/tooltip';
import { Description } from '@leafygreen-ui/typography';

import MobileNavigationGroup from './MobileNavigationGroup';
import MobileNavigationItem from './MobileNavigationItem';

const LockIconContainer = styled('div')`
  padding-left: ${spacing[1]}px;
  display: inline-flex;
  align-items: center;
  path {
    fill: ${palette.gray.base};
  }
`;

function NavigationContent({
  isTouchDevice = false,
}: {
  isTouchDevice?: boolean;
}) {
  const router = useRouter();
  const { data: session } = useSession();
  const activePage = router.asPath.split('/')[2];
  const { components, contentPageGroups } = useAppContext();

  if (!components || !contentPageGroups) {
    return <>Loading...</>;
  }

  return (
    <>
      {isTouchDevice ? (
        <>
          {contentPageGroups.map(contentPageGroup => (
            <MobileNavigationGroup
              key={contentPageGroup.uid}
              header={contentPageGroup.title}
            >
              {contentPageGroup.content_pages.map(({ title }) => (
                <MobileNavigationItem
                  key={title}
                  onClick={() => router.push(`/foundation/${title}`)}
                  active={title === activePage}
                >
                  {title.split('-').join(' ')}
                </MobileNavigationItem>
              ))}
            </MobileNavigationGroup>
          ))}
          <MobileNavigationGroup
            header="Components"
            initialCollapsed={false} // Always false until we add more sections to navigation
          >
            {components.map((component: ComponentFields) => {
              const componentKebabCaseName = kebabCase(component.title);
              return (
                <MobileNavigationItem
                  key={componentKebabCaseName}
                  onClick={() =>
                    router.push(`/component/${componentKebabCaseName}/example`)
                  }
                  active={componentKebabCaseName === activePage}
                >
                  <div>
                    <div style={{ display: 'flex' }}>
                      {component.title}
                      {component.private && (
                        <LockIconContainer>
                          <Icon glyph="Lock" />
                        </LockIconContainer>
                      )}
                    </div>
                    {component.private && (
                      <Description
                        style={{
                          textTransform: 'none',
                          color: palette.gray.base,
                        }}
                      >
                        Log in to view this component
                      </Description>
                    )}
                  </div>
                </MobileNavigationItem>
              );
            })}
          </MobileNavigationGroup>
        </>
      ) : (
        <>
          {contentPageGroups.map(contentPageGroup => (
            <SideNavGroup
              key={contentPageGroup.uid}
              header={contentPageGroup.title}
              glyph={<Icon glyph={contentPageGroup.iconname} />}
            >
              {contentPageGroup.content_pages &&
                contentPageGroup.content_pages.map(contentPage => {
                  const contentPageKebabCaseName = kebabCase(contentPage.title);

                  return (
                    <SideNavItem
                      key={contentPage.title}
                      as={NextLinkWrapper}
                      href={`/${kebabCase(
                        contentPageGroup.title,
                      )}/${contentPageKebabCaseName}`}
                      active={contentPageKebabCaseName === activePage}
                    >
                      {contentPage.title}
                    </SideNavItem>
                  );
                })}
            </SideNavGroup>
          ))}
          <SideNavGroup header="Components" glyph={<Icon glyph="Apps" />}>
            {components.map((component: ComponentFields) => {
              const componentKebabCaseName = kebabCase(component.title);

              if (!component.private) {
                return (
                  <SideNavItem
                    key={componentKebabCaseName}
                    href={`/component/${componentKebabCaseName}/example`}
                    as={NextLinkWrapper}
                    active={componentKebabCaseName === activePage}
                  >
                    {component.title}
                  </SideNavItem>
                );
              } else {
                return (
                  <>
                    {session ? (
                      <SideNavItem
                        key={componentKebabCaseName}
                        as={NextLinkWrapper}
                        active={componentKebabCaseName === activePage}
                        href={`/component/private/${componentKebabCaseName}/example`}
                      >
                        {component.title}
                        <LockIconContainer>
                          <Icon glyph="Lock" />
                        </LockIconContainer>
                      </SideNavItem>
                    ) : (
                      <Tooltip
                        align="right"
                        trigger={
                          <SideNavItem
                            key={componentKebabCaseName}
                            as={NextLinkWrapper}
                            active={componentKebabCaseName === activePage}
                            href={`/component/private/${componentKebabCaseName}/example`}
                          >
                            {component.title}
                            <LockIconContainer>
                              <Icon glyph="Lock" />
                            </LockIconContainer>
                          </SideNavItem>
                        }
                      >
                        Log in to view component
                      </Tooltip>
                    )}
                  </>
                );
              }
            })}
          </SideNavGroup>
        </>
      )}
    </>
  );
}

NavigationContent.displayName = 'NavigationContent';

export default NavigationContent;
