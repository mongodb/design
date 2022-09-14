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

const nextConfig = withMDX({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'tsx', 'ts'],
  trailingSlash: true,
  webpack: (config, options) => {
    config.resolve.symlinks = true;
    config.module.rules.push({
      // test: /.+\.story.tsx?$/,
      test: /\.+(js|jsx|mjs|ts|tsx)$/,
      use: options.defaultLoaders.babel,
      // Look for packages (or symlinks) that include `leafygreen-ui`, but omit those modules their own node_modules
      include: filePath =>
        /.+(node_modules)*\/@*leafygreen-ui\/(?!node_modules).+/g.test(
          filePath,
        ),
      type: 'javascript/auto',
    });
    return config;
  },
});

export default nextConfig;
