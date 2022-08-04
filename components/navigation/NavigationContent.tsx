import React, { Key } from 'react';
import { useRouter } from 'next/router';
import {
  SideNavGroup,
  SideNavItem,
} from '@leafygreen-ui/side-nav';
import Icon from '@leafygreen-ui/icon';
import MobileNavigationGroup from './MobileNavigationGroup';
import MobileNavigationItem from './MobileNavigationItem';
import componentData from 'utils/componentData';
import { useAppContext } from 'contexts/AppContext';
import { Entry, EntryCollection } from 'contentful';
import { ComponentFields } from 'utils/types';

const foundations: Array<String> = [
  'accessibility',
  'forms',
  'grid',
  'icon-creation',
  'refresh-guide',
];

function NavigationContent({ isTouchDevice = false }: { isTouchDevice?: boolean }) {
  const router = useRouter();
  const activePage = router.asPath.split('/')[2];
  const { components } = useAppContext();

  const renderGroup = () => {
    if (isTouchDevice) {
      return (
        <>
          <MobileNavigationGroup header="Foundations">
            {foundations.map((componentKebabCaseName: string) => (
              <MobileNavigationItem
                key={componentKebabCaseName as Key}
                onClick={() => router.push(`/foundation/${componentKebabCaseName}`)}
                active={componentKebabCaseName === activePage}
              >
                {componentKebabCaseName.split('-').join(' ')}
              </MobileNavigationItem>
            ))}
          </MobileNavigationGroup>
          <MobileNavigationGroup
            header="Components"
            initialCollapsed={false} // Always false until we add more sections to navigation
          >
            {components.map((component: Entry<ComponentFields>) => {
              const componentKebabCaseName = component.fields.kebabCaseName;
              const componentName = component.fields.name;
              return (
                <MobileNavigationItem
                  key={componentKebabCaseName}
                  onClick={() => router.push(`/component/${componentKebabCaseName}/example`)}
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
        <SideNavGroup header="Foundations" glyph={<Icon glyph="University" />}>
          {foundations.map(componentKebabCaseName => (
            <SideNavItem
              key={componentKebabCaseName as Key}
              onClick={() => router.push(`/foundation/${componentKebabCaseName}`)}
              active={componentKebabCaseName === activePage}
            >
              {componentKebabCaseName.split('-').join(' ')}
            </SideNavItem>
          ))}
        </SideNavGroup>
        <SideNavGroup header="Components" glyph={<Icon glyph="Apps" />}>
          {components.map((component: Entry<ComponentFields>) => {
            const componentKebabCaseName = component.fields.kebabCaseName;
            const componentName = component.fields.name;
            return (
              <SideNavItem
                key={componentKebabCaseName}
                onClick={() => router.push(`/component/${componentKebabCaseName}/example`)}
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