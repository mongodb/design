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
      test: /\.(stor(y|ies))?\.tsx?/,
      loader: 'ts-loader',
      options: {
        compilerOptions: {
          'target': 'ES5',
          'jsx': 'react',
          'allowJs': false,
          'pretty': true,
          'strictNullChecks': true,
          'noUnusedLocals': true,
          'esModuleInterop': true,
          'strict': true,
          'allowSyntheticDefaultImports': true,
          'moduleResolution': 'node',
          'baseUrl': '.',
          'skipLibCheck': true,
          'noEmit': false,
          'module': 'esnext',
          'declaration': true,
          'declarationMap': true,
          'emitDeclarationOnly': false,
          'importHelpers': false,
          'composite': true,
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
