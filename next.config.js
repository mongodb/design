// import rehypeSlug from 'rehype-slug';
// import rehypeAutolinkHeadings from 'rehype-autolink-headings';
// import nextMdx from '@next/mdx';

// const withMDX = nextMdx({
//   extension: /\.mdx?$/,
//   options: {
//     rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
//     providerImportSource: '@mdx-js/react',
//   },
// });

module.exports = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'tsx', 'ts'],
  trailingSlash: true,
  images: {
    domains: ['images.ctfassets.net'],
  }
};

// export default nextConfig; 
