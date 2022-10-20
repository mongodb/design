const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'tsx', 'ts'],
  trailingSlash: true,
  images: {
    domains: ['images.ctfassets.net'],
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
  if (
    (filePath.match(/node_modules/g) || []).length > 1 ||
    (filePath.match(/leafygreen-ui/g) || []).length > 1
  )
    return false;
  return /.+(node_modules)*\/@*leafygreen-ui\/(?!node_modules).+/g.test(
    filePath,
  );
}
