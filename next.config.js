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

const nextConfig = withMDX({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'tsx', 'ts'],
  trailingSlash: true,
  webpack: (config, options) => {
    // Since Next.js 8.1.0, config.externals is undefined
    if (Array.isArray(config.externals)) {
      config.externals = config.externals.map(external => {
        if (typeof external !== 'function') return external;

        return async options => {
          const externalResult = await external(options);

          if (externalResult) {
            try {
              const resolve = options.getResolve();
              const resolved = await resolve(options.context, options.request);
              if (modulesPaths.some(mod => resolved.startsWith(mod))) return;
              // eslint-disable-next-line no-empty
            } catch (e) {}
          }

          return externalResult;
        };
      });
    }

    config.resolve.symlinks = true;
    config.module.rules.push({
      // test: /.+\.story.tsx?$/,
      test: /\.+(js|jsx|mjs|ts|tsx)$/,
      use: options.defaultLoaders.babel,
      // Include packages (or symlinks) that include `leafygreen-ui`,
      // but omit those modules their own node_modules
      include: filePath => {
        if (
          (filePath.match(/node_modules/g) || []).length > 1 ||
          (filePath.match(/leafygreen-ui/g) || []).length > 1
        )
          return false;
        return /.+(node_modules)*\/@*leafygreen-ui\/(?!node_modules).+/g.test(
          filePath,
        );
      },
      type: 'javascript/auto',
    });
    return config;
  },
});

export default nextConfig;
