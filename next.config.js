import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import nextMdx from '@next/mdx';

const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
    providerImportSource: '@mdx-js/react',
  },
});

const mdxConfig = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'tsx', 'ts'],
  trailingSlash: true,
  webpack(config) {

    config.module.rules.push({
      test: /\.stories\.tsx?$/,
      loader: 'ts-loader',
      options: {
        compilerOptions: {
          noEmit: false,
          esModuleInterop: true,
          jsx: true,
          isolatedModules: false,
        }
      }
    })
    // config.module.rules.push({
    //   test: /\.stories\.tsx?$/,
    //   use: [
    //     {
    //       loader: '@storybook/source-loader',
    //       options: { parser: 'typescript' },
    //     },
    //   ],
    //   enforce: 'pre',
    // });

    return config
  }
});

export default mdxConfig;
