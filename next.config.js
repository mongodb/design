import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import nextMdx from '@next/mdx';
import nextTranspile from 'next-transpile-modules';

const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
    providerImportSource: '@mdx-js/react',
  },
});

const withTM = nextTranspile([
  '@leafygreen-ui/a11y',
  '@leafygreen-ui/badge',
  '@leafygreen-ui/banner',
  '@leafygreen-ui/box',
  '@leafygreen-ui/button',
  '@leafygreen-ui/callout',
  '@leafygreen-ui/card',
  '@leafygreen-ui/checkbox',
  '@leafygreen-ui/code',
  '@leafygreen-ui/combobox',
  '@leafygreen-ui/confirmation-modal',
  '@leafygreen-ui/copyable',
  '@leafygreen-ui/emotion',
  '@leafygreen-ui/expandable-card',
  '@leafygreen-ui/form-footer',
  '@leafygreen-ui/hooks',
  '@leafygreen-ui/icon',
  '@leafygreen-ui/icon-button',
  '@leafygreen-ui/inline-definition',
  '@leafygreen-ui/interaction-ring',
  '@leafygreen-ui/leafygreen-provider',
  '@leafygreen-ui/lib',
  '@leafygreen-ui/logo',
  '@leafygreen-ui/marketing-modal',
  '@leafygreen-ui/menu',
  '@leafygreen-ui/modal',
  '@leafygreen-ui/palette',
  '@leafygreen-ui/pipeline',
  '@leafygreen-ui/popover',
  '@leafygreen-ui/portal',
  '@leafygreen-ui/radio-box-group',
  '@leafygreen-ui/radio-group',
  '@leafygreen-ui/ripple',
  '@leafygreen-ui/segmented-control',
  '@leafygreen-ui/select',
  '@leafygreen-ui/side-nav',
  '@leafygreen-ui/stepper',
  '@leafygreen-ui/table',
  '@leafygreen-ui/tabs',
  '@leafygreen-ui/testing-lib',
  '@leafygreen-ui/text-area',
  '@leafygreen-ui/text-input',
  '@leafygreen-ui/toast',
  '@leafygreen-ui/toggle',
  '@leafygreen-ui/tokens',
  '@leafygreen-ui/tooltip',
  '@leafygreen-ui/typography',
],
{
  resolveSymlinks: true
});

const mdxConfig = withTM(
  withMDX({
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'tsx', 'ts'],
    trailingSlash: true,
  })
);

export default mdxConfig;
