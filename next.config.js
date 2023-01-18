const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'tsx', 'ts'],
  trailingSlash: true,
  images: {
    domains: ['images.contentstack.io'],
  },
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

    // Allows dynamic loading of stories
    config.module.rules.push({
      test: /\.+(js|jsx|mjs|ts|tsx)$/,
      use: options.defaultLoaders.babel,
      include: isPathInLeafygreen,
      type: 'javascript/auto',
    });

    config.module.rules.push({
      test: /\.+(stories|story)\.tsx?$/,
      use: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: { parser: 'typescript' },
        },
      ],
      include: isPathInLeafygreen,
      enforce: 'pre',
    });

    // Allow <Icon /> to dynamically import the svg files
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
      include: isPathInLeafygreen,
    });

    return config;
  },
};

module.exports = nextConfig;

/**
 * Include packages (or symlinks) that include `leafygreen-ui`,
 * but omit those modules their own node_modules
 */
function isPathInLeafygreen(filePath) {
  // This regex excludes any nested modules
  // const LGModuleRegex = /^(?!.*(node_modules).*(node_modules)).*(node_modules\/@leafygreen-ui).*$/g

  // We need to include any nested leafygreen modules in the transpilation.
  // Returning `true` here overrides `exclude` in the tsconfig
  const LGModuleRegex = /.+(node_modules\/@leafygreen-ui)/g;
  // Also include linked packages
  const LinkedModuleRegex = /[A-Za-z_/\-.]+leafygreen-ui\/packages/g
  return LGModuleRegex.test(filePath) || LinkedModuleRegex.test(filePath);
}
