import { useAppContext } from 'contexts/AppContext';
import kebabCase from 'lodash/kebabCase';
import { useRouter } from 'next/router';
import { ComponentFields } from 'utils/ContentStack/types';

import { NextLinkWrapper } from 'components/NextLinkWrapper';

import Icon from '@leafygreen-ui/icon';
import { SideNavGroup, SideNavItem } from '@leafygreen-ui/side-nav';

import MobileNavigationGroup from './MobileNavigationGroup';
import MobileNavigationItem from './MobileNavigationItem';

function NavigationContent({
  isTouchDevice = false,
}: {
  isTouchDevice?: boolean;
}) {
  const router = useRouter();
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
                  {component.title}
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
            })}
          </SideNavGroup>
        </>
      )}
    </>
  );
}

NavigationContent.displayName = 'NavigationContent';

export default NavigationContent;
