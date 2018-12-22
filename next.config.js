const withPlugins = require("next-compose-plugins");
const withOffline = require("next-offline");
const withSass = require("@zeit/next-sass");
const withPurgeCss = require("next-purgecss");
const rehypePrism = require("@mapbox/rehype-prism");
const webpack = require("webpack");
const optimizedImages = require('next-optimized-images');

const withMDX = require("@zeit/next-mdx")({
  extension: /\.(md|mdx)?$/,
  options: {
    hastPlugins: [rehypePrism]
  }
});

const nextConfig = {
  distDir: "build",
  pageExtensions: ["js", "jsx", "mdx"],
  webpack: config => {
    config.plugins = config.plugins || [];
    config.plugins.push(
      new webpack.ContextReplacementPlugin(
        /highlight\.js[\/\\]lib[\/\\]languages$/,
        new RegExp(`^./(${["javascript", "json", "xml"].join("|")})$`)
      )
    );
    return config;
  }
};

module.exports = withPlugins(
  [
    [optimizedImages, {
			/* config for next-optimized-images */
		}],
    [withMDX, {}],
    withOffline,
    [withSass, { withPurgeCss }]

    // your other plugins here
  ],
  nextConfig
);
