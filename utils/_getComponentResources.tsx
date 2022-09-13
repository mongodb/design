import fs from 'fs';
import path from 'path';
import util from 'util';
import { startCase } from 'lodash';
import markdownToHtml from 'utils/markdownToHtml';
import { CustomComponentDoc } from 'components/pages/documentation/TSDocPropTable';
import dynamic from 'next/dynamic';

// import * as Story from '@leafygreen-ui/button/src/Button.story';

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function () {
  return null;
}

const getFileContent = util.promisify(fs.readFile);

export const getDependencyDocumentation = async (
  componentKebabCaseName: any,
): Promise<{
  props: {
    componentKebabCaseName: string;
    changelog: string | null;
    readme: string | null;
    tsDoc: Array<CustomComponentDoc> | null;
  };
}> => {
  if (typeof componentKebabCaseName !== 'string') {
    return {
      props: {
        componentKebabCaseName: '',
        changelog: null,
        readme: null,
        tsDoc: null,
      },
    };
  }

  return {
    props: {
      componentKebabCaseName,
      changelog: await getChangelog(componentKebabCaseName),
      readme: await getReadme(componentKebabCaseName),
      tsDoc: await getTSDoc(componentKebabCaseName),
    },
  };
};

export async function getChangelog(
  componentName: string,
): Promise<string | null> {
  try {
    const changelogMarkdown = await getFileContent(
      path.join(
        './node_modules',
        `@leafygreen-ui/${componentName}`,
        '/CHANGELOG.md',
      ),
    );
    return await markdownToHtml(changelogMarkdown);
  } catch (error) {
    console.warn(error);
    return null;
  }
}

export async function getReadme(componentName: string): Promise<string | null> {
  try {
    const readmeMarkdown = await getFileContent(
      path.join(
        './node_modules',
        `@leafygreen-ui/${componentName}`,
        '/README.md',
      ),
      'utf-8',
    );

    return readmeMarkdown;
  } catch (error) {
    console.warn(error);
    return null;
  }
}

export async function getTSDoc(
  componentName: string,
): Promise<Array<CustomComponentDoc> | null> {
  try {
    return JSON.parse(
      await getFileContent(
        path.join(
          './node_modules',
          `@leafygreen-ui/${componentName}`,
          '/tsdoc.json',
        ),
        'utf-8',
      ),
    );
  } catch (error) {
    console.warn(error);
    return null;
  }
}

export async function getStory(componentName: string): Promise<{
  Component: any | null;
  Story: any | null;
}> {
  try {
    switch (componentName) {
      case 'a11y':
        return {
          Component: await import('@leafygreen-ui/a11y'),
          Story: null, //await import('@leafygreen-ui/a11y/src/a11y.story')
        };
      case 'badge':
        return {
          Component: await import('@leafygreen-ui/badge'),
          Story: await import('@leafygreen-ui/badge/src/Badge.story'),
        };
      case 'banner':
        return {
          Component: await import('@leafygreen-ui/banner'),
          Story: await import('@leafygreen-ui/banner/src/Banner.story'),
        };
      case 'box':
        return {
          Component: await import('@leafygreen-ui/box'),
          Story: await import('@leafygreen-ui/box/src/Box.story'),
        };
      case 'button':
        return {
          Component: await import('@leafygreen-ui/button'),
          Story: await import('@leafygreen-ui/button/src/Button.story'),
        };
      case 'callout':
        return {
          Component: await import('@leafygreen-ui/callout'),
          Story: await import('@leafygreen-ui/callout/src/Callout.story'),
        };
      case 'card':
        return {
          Component: await import('@leafygreen-ui/card'),
          Story: await import('@leafygreen-ui/card/src/Card.story'),
        };
      case 'checkbox':
        return {
          Component: await import('@leafygreen-ui/checkbox'),
          Story: await import('@leafygreen-ui/checkbox/src/Checkbox.story'),
        };
      case 'code':
        return {
          Component: await import('@leafygreen-ui/code'),
          Story: await import('@leafygreen-ui/code/src/Code.story'),
        };
      case 'combobox':
        return {
          Component: await import('@leafygreen-ui/combobox'),
          Story: await import('@leafygreen-ui/combobox/src/Combobox.story'),
        };
      case 'confirmation-modal':
        // prettier-ignore
        return {
          Component: await import('@leafygreen-ui/confirmation-modal'),
          Story: await import('@leafygreen-ui/confirmation-modal/src/ConfirmationModal.story')
        }
      case 'copyable':
        return {
          Component: await import('@leafygreen-ui/copyable'),
          Story: await import('@leafygreen-ui/copyable/src/copyable.story'),
        };
      case 'emotion':
        return {
          Component: await import('@leafygreen-ui/emotion'),
          Story: null, //await import('@leafygreen-ui/emotion/src/emotion.story')
        };
      case 'expandable-card':
        // prettier-ignore
        return {
          Component: await import('@leafygreen-ui/expandable-card'),
          Story: await import('@leafygreen-ui/expandable-card/src/ExpandableCard.story')
        }
      case 'form-footer':
        // prettier-ignore
        return {
          Component: await import('@leafygreen-ui/form-footer'),
          Story: await import('@leafygreen-ui/form-footer/src/FormFooter.story'),
        };
      case 'hooks':
        return {
          Component: await import('@leafygreen-ui/hooks'),
          Story: null, // await import('@leafygreen-ui/hooks/src/hooks.story')
        };
      case 'icon':
        return {
          Component: await import('@leafygreen-ui/icon'),
          Story: await import('@leafygreen-ui/icon/src/icon.story'),
        };
      case 'icon-button':
        // prettier-ignore
        return {
          Component: await import('@leafygreen-ui/icon-button'),
          Story: await import('@leafygreen-ui/icon-button/src/IconButton.story'),
        };
      case 'inline-definition':
        // prettier-ignore
        return {
          Component: await import('@leafygreen-ui/inline-definition'),
          Story: await import('@leafygreen-ui/inline-definition/src/InlineDefinition.story')
        }
      case 'interaction-ring':
        return {
          Component: await import('@leafygreen-ui/interaction-ring'),
          Story: null, //await import('@leafygreen-ui/interaction-ring/src/InteractionRing.story')
        };
      case 'leafygreen-provider':
        return {
          Component: await import('@leafygreen-ui/leafygreen-provider'),
          Story: null, // await import('@leafygreen-ui/leafygreen-provider/src/leafygreen-provider.story')
        };
      case 'lib':
        return {
          Component: await import('@leafygreen-ui/lib'),
          Story: null, // await import('@leafygreen-ui/lib/src/lib.story')
        };
      case 'logo':
        return {
          Component: await import('@leafygreen-ui/logo'),
          Story: await import('@leafygreen-ui/logo/src/logo.story'),
        };
      case 'marketing-modal':
        // prettier-ignore
        return {
          Component: await import('@leafygreen-ui/marketing-modal'),
          Story: await import('@leafygreen-ui/marketing-modal/src/MarketingModal.story')
        }
      case 'menu':
        return {
          Component: await import('@leafygreen-ui/menu'),
          Story: await import('@leafygreen-ui/menu/src/Menu.story'),
        };
      case 'modal':
        return {
          Component: await import('@leafygreen-ui/modal'),
          Story: await import('@leafygreen-ui/modal/src/Modal.story'),
        };
      case 'palette':
        return {
          Component: await import('@leafygreen-ui/palette'),
          Story: await import('@leafygreen-ui/palette/src/palette.story'),
        };
      case 'pipeline':
        return {
          Component: await import('@leafygreen-ui/pipeline'),
          Story: await import('@leafygreen-ui/pipeline/src/pipeline.story'),
        };
      case 'popover':
        return {
          Component: await import('@leafygreen-ui/popover'),
          Story: await import('@leafygreen-ui/popover/src/popover.story'),
        };
      case 'portal':
        return {
          Component: await import('@leafygreen-ui/portal'),
          Story: await import('@leafygreen-ui/portal/src/portal.story'),
        };
      case 'radio-box-group':
        // prettier-ignore
        return {
          Component: await import('@leafygreen-ui/radio-box-group'),
          Story: await import('@leafygreen-ui/radio-box-group/src/RadioBoxGroup.story')
        }
      case 'radio-group':
        // prettier-ignore
        return {
          Component: await import('@leafygreen-ui/radio-group'),
          Story: await import('@leafygreen-ui/radio-group/src/RadioGroup.story'),
        };
      case 'ripple':
        return {
          Component: await import('@leafygreen-ui/ripple'),
          Story: null, //await import('@leafygreen-ui/ripple/src/Ripple.story')
        };
      case 'segmented-control':
        // prettier-ignore
        return {
          Component: await import('@leafygreen-ui/segmented-control'),
          Story: await import('@leafygreen-ui/segmented-control/src/SegmentedControl.story')
        }
      case 'select':
        return {
          Component: await import('@leafygreen-ui/select'),
          Story: await import('@leafygreen-ui/select/src/select.story'),
        };
      case 'side-nav':
        return {
          Component: await import('@leafygreen-ui/side-nav'),
          Story: await import('@leafygreen-ui/side-nav/src/SideNav.story'),
        };
      case 'stepper':
        return {
          Component: await import('@leafygreen-ui/stepper'),
          Story: await import('@leafygreen-ui/stepper/src/stepper.story'),
        };
      case 'table':
        return {
          Component: await import('@leafygreen-ui/table'),
          Story: await import('@leafygreen-ui/table/src/table.story'),
        };
      case 'tabs':
        return {
          Component: await import('@leafygreen-ui/tabs'),
          Story: await import('@leafygreen-ui/tabs/src/tabs.story'),
        };
      case 'testing-lib':
        return {
          Component: await import('@leafygreen-ui/testing-lib'),
          Story: null, //await import('@leafygreen-ui/testing-lib/src/TestingLib.story')
        };
      case 'text-area':
        return {
          Component: await import('@leafygreen-ui/text-area'),
          Story: await import('@leafygreen-ui/text-area/src/TextArea.story'),
        };
      case 'text-input':
        return {
          Component: await import('@leafygreen-ui/text-input'),
          Story: await import('@leafygreen-ui/text-input/src/TextInput.story'),
        };
      case 'toast':
        return {
          Component: await import('@leafygreen-ui/toast'),
          Story: await import('@leafygreen-ui/toast/src/toast.story'),
        };
      case 'toggle':
        return {
          Component: await import('@leafygreen-ui/toggle'),
          Story: await import('@leafygreen-ui/toggle/src/toggle.story'),
        };
      case 'tokens':
        return {
          Component: await import('@leafygreen-ui/tokens'),
          Story: await import('@leafygreen-ui/tokens/src/tokens.story'),
        };
      case 'tooltip':
        return {
          Component: await import('@leafygreen-ui/tooltip'),
          Story: await import('@leafygreen-ui/tooltip/src/tooltip.story'),
        };
      case 'typography':
        return {
          Component: await import('@leafygreen-ui/typography'),
          Story: await import('@leafygreen-ui/typography/src/typography.story'),
        };
    }
  } catch (error) {
    console.warn(error);
  }

  return {
    Component: null,
    Story: null,
  };
}
