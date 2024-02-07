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
              {contentPageGroup.content_pages.map(({ title, is_private }) => {
                const shouldRenderAsLocked = is_private && !session;
                return (
                  <MobileNavigationItem
                    key={title}
                    onClick={() =>
                      router.push(
                        `/${contentPageGroup.title}/${
                          is_private ? 'private/' : ''
                        }${title}`,
                      )
                    }
                    active={title === activePage}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        {title.split('-').join(' ')}
                        {shouldRenderAsLocked && (
                          <LockIconContainer>
                            <Icon glyph="Lock" />
                          </LockIconContainer>
                        )}
                      </div>
                      <div style={{ display: 'block' }}>
                        {shouldRenderAsLocked && (
                          <Description
                            style={{
                              textTransform: 'none',
                              color: palette.gray.base,
                            }}
                          >
                            Log in to view this page
                          </Description>
                        )}
                      </div>
                    </div>
                  </MobileNavigationItem>
                );
              })}
            </MobileNavigationGroup>
          ))}
          <MobileNavigationGroup
            header="Components"
            initialCollapsed={false} // Always false until we add more sections to navigation
          >
            {components.map((component: ComponentFields) => {
              const componentKebabCaseName = kebabCase(component.title);
              const shouldRenderAsLocked = component.private && !session;
              return (
                <MobileNavigationItem
                  key={componentKebabCaseName}
                  onClick={() =>
                    router.push(`/component/${componentKebabCaseName}`)
                  }
                  active={componentKebabCaseName === activePage}
                >
                  <div>
                    <div style={{ display: 'flex' }}>
                      {component.title}
                      {shouldRenderAsLocked && (
                        <LockIconContainer>
                          <Icon glyph="Lock" />
                        </LockIconContainer>
                      )}
                    </div>
                    {shouldRenderAsLocked && (
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
                  const shouldRenderAsLocked =
                    contentPage.is_private && !session;

                  if (shouldRenderAsLocked) {
                    return (
                      <Tooltip
                        key={`${contentPageKebabCaseName}-page-tooltip`}
                        align="right"
                        trigger={
                          <SideNavItem
                            key={contentPageKebabCaseName}
                            as={NextLinkWrapper}
                            active={contentPageKebabCaseName === activePage}
                            href={`/${kebabCase(contentPageGroup.title)}/${
                              contentPage.is_private ? 'private/' : ''
                            }${contentPageKebabCaseName}`}
                          >
                            {contentPage.title}
                            <LockIconContainer>
                              <Icon glyph="Lock" />
                            </LockIconContainer>
                          </SideNavItem>
                        }
                      >
                        Log in to view this page
                      </Tooltip>
                    );
                  } else {
                    return (
                      <SideNavItem
                        key={contentPageKebabCaseName}
                        href={`/${kebabCase(contentPageGroup.title)}/${
                          contentPage.is_private ? 'private/' : ''
                        }${contentPageKebabCaseName}`}
                        as={NextLinkWrapper}
                        active={contentPageKebabCaseName === activePage}
                      >
                        {contentPage.title}
                      </SideNavItem>
                    );
                  }
                })}
            </SideNavGroup>
          ))}
          <SideNavGroup header="Components" glyph={<Icon glyph="Apps" />}>
            {components.map((component: ComponentFields) => {
              const componentKebabCaseName = kebabCase(component.title);
              const shouldRenderAsLocked = component.private && !session;

              if (shouldRenderAsLocked) {
                return (
                  <Tooltip
                    key={`${componentKebabCaseName}-page-tooltip`}
                    align="right"
                    trigger={
                      <SideNavItem
                        key={componentKebabCaseName}
                        as={NextLinkWrapper}
                        active={componentKebabCaseName === activePage}
                        href={`/component/${
                          component.private ? 'private/' : ''
                        }${componentKebabCaseName}`}
                      >
                        {component.title}
                        <LockIconContainer>
                          <Icon glyph="Lock" />
                        </LockIconContainer>
                      </SideNavItem>
                    }
                  >
                    Log in to view this component
                  </Tooltip>
                );
              } else {
                return (
                  <SideNavItem
                    key={componentKebabCaseName}
                    href={`/component/${
                      component.private ? 'private/' : ''
                    }${componentKebabCaseName}`}
                    as={NextLinkWrapper}
                    active={componentKebabCaseName === activePage}
                  >
                    {component.title}
                  </SideNavItem>
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
