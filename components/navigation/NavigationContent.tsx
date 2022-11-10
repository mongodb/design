import { useRouter } from 'next/router';
import { SideNavGroup, SideNavItem } from '@leafygreen-ui/side-nav';
import Icon from '@leafygreen-ui/icon';
import MobileNavigationGroup from './MobileNavigationGroup';
import MobileNavigationItem from './MobileNavigationItem';
import { useAppContext } from 'contexts/AppContext';
import kebabCase from 'lodash/kebabCase';
import { ComponentFields } from 'utils/types';

const foundations: Array<String> = [
  'accessibility',
  'forms',
  'grid',
  'icon-creation',
  'refresh-guide',
];

function NavigationContent({
  isTouchDevice = false,
}: {
  isTouchDevice?: boolean;
}) {
  const router = useRouter();
  const activePage = router.asPath.split('/')[2];
  const activeTab = router.asPath.split('/')[3];
  const { components, contentPageGroups } = useAppContext();
  console.log(components)

  if (!components || !contentPageGroups) {
    return <>Loading...</>;
  }

  return (
    <>
      {isTouchDevice ? (
        <>
          <MobileNavigationGroup header="Foundations">
            {foundations.map((foundationPageName: string) => (
              <MobileNavigationItem
                key={foundationPageName}
                onClick={() => router.push(`/foundation/${foundationPageName}`)}
                active={foundationPageName === activePage}
              >
                {foundationPageName.split('-').join(' ')}
              </MobileNavigationItem>
            ))}
          </MobileNavigationGroup>
          <MobileNavigationGroup
            header="Components"
            initialCollapsed={false} // Always false until we add more sections to navigation
          >
            {components.map((componentName: string) => {
              const componentKebabCaseName = kebabCase(componentName);
              return (
                <MobileNavigationItem
                  key={componentKebabCaseName}
                  onClick={() =>
                    router.push(`/component/${componentKebabCaseName}/example`)
                  }
                  active={componentKebabCaseName === activePage}
                >
                  {componentName}
                </MobileNavigationItem>
              );
            })}
          </MobileNavigationGroup>
        </>
      ) : (
        <>
          {contentPageGroups.map(contentPageGroup => (
            <SideNavGroup
              key={contentPageGroup.id}
              header={contentPageGroup.title}
              glyph={<Icon glyph={contentPageGroup.iconname} />}
            >
              {contentPageGroup.contentpages.map(contentPage => (
                <SideNavItem
                  key={contentPage.title}
                  onClick={() =>
                    router.push(
                      `/${kebabCase(contentPageGroup.title)}/${kebabCase(
                        contentPage.title,
                      )}`,
                    )
                  }
                  active={contentPage.title === activePage}
                >
                  {contentPage.title}
                </SideNavItem>
              ))}
            </SideNavGroup>
          ))}
          <SideNavGroup header="Components" glyph={<Icon glyph="Apps" />}>
            {components.map((component: ComponentFields) => {
              const componentKebabCaseName = kebabCase(component.name);

              return (
                <SideNavItem
                  key={componentKebabCaseName}
                  onClick={() =>
                    router.push(
                      `/component/${componentKebabCaseName}/${activeTab ? activeTab : 'example'
                      }`,
                    )
                  }
                  active={componentKebabCaseName === activePage}
                >
                  {component.name}
                </SideNavItem>
              );
            })}
          </SideNavGroup>
        </>
      )}
    </>
  )
}

NavigationContent.displayName = 'NavigationContent';

export default NavigationContent;
