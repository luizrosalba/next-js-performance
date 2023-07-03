/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    mdxRs: true,
  },
}

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require("remark-prism")],
  },
});



module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
});

module.exports = withMDX(nextConfig)
