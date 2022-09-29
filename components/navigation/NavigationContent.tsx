import { useRouter } from 'next/router';
import { SideNavGroup, SideNavItem } from '@leafygreen-ui/side-nav';
import Icon from '@leafygreen-ui/icon';
import MobileNavigationGroup from './MobileNavigationGroup';
import MobileNavigationItem from './MobileNavigationItem';
import { useAppContext } from 'contexts/AppContext';
import kebabCase from 'lodash/kebabCase';

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

  const renderGroup = () => {
    if (isTouchDevice) {
      return (
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
      );
    }

    return (
      <>
        {contentPageGroups.map(contentPageGroup => (
          <SideNavGroup
            key={contentPageGroup.id}
            header={contentPageGroup.fields.title}
            glyph={<Icon glyph={contentPageGroup.fields.iconName} />}
          >
            {contentPageGroup.fields.contentPages.map(contentPage => (
              <SideNavItem
                key={contentPage.fields.title}
                onClick={() =>
                  router.push(
                    `/${kebabCase(contentPageGroup.fields.title)}/${kebabCase(
                      contentPage.fields.title,
                    )}`,
                  )
                }
                active={contentPage.fields.title === activePage}
              >
                {contentPage.fields.title}
              </SideNavItem>
            ))}
          </SideNavGroup>
        ))}
        <SideNavGroup header="Components" glyph={<Icon glyph="Apps" />}>
          {components.map((componentName: string) => {
            const componentKebabCaseName = kebabCase(componentName);

            return (
              <SideNavItem
                key={componentKebabCaseName}
                onClick={() =>
                  router.push(
                    `/component/${componentKebabCaseName}/${activeTab ? activeTab : 'example'}`,
                  )
                }
                active={componentKebabCaseName === activePage}
              >
                {componentName}
              </SideNavItem>
            );
          })}
        </SideNavGroup>
      </>
    );
  };

  return renderGroup();
}

NavigationContent.displayName = 'NavigationContent';

export default NavigationContent;
