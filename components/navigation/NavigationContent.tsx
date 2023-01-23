import { useRouter } from 'next/router';
import { SideNavGroup, SideNavItem } from '@leafygreen-ui/side-nav';
import Icon from '@leafygreen-ui/icon';
import MobileNavigationGroup from './MobileNavigationGroup';
import MobileNavigationItem from './MobileNavigationItem';
import { useAppContext } from 'contexts/AppContext';
import kebabCase from 'lodash/kebabCase';
import { ComponentFields } from 'utils/ContentStack/types';
import NextLink from 'next/link';

const NextLinker = ({ href, children, ...props }) => (
  <NextLink href={href}>
    <a {...props}>{children}</a>
  </NextLink>
);

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
                contentPageGroup.content_pages.map(contentPage => (
                  <SideNavItem
                    key={contentPage.title}
                    as={NextLinker}
                    href={`/${kebabCase(contentPageGroup.title)}/${kebabCase(
                      contentPage.title,
                    )}`}
                    active={contentPage.title === activePage}
                  >
                    {contentPage.title}
                  </SideNavItem>
                ))}
            </SideNavGroup>
          ))}
          <SideNavGroup header="Components" glyph={<Icon glyph="Apps" />}>
            {components.map((component: ComponentFields) => {
              const componentKebabCaseName = kebabCase(component.title);

              return (
                <SideNavItem
                  key={componentKebabCaseName}
                  href={`/component/${componentKebabCaseName}/example`}
                  as={NextLinker}
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
