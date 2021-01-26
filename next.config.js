const withOptimizedImages = require('next-optimized-images');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withOptimizedImages({
  basePath: isProd ? '/victorkuo/' : '',
  assetPrefix: isProd ? '/victorkuo/' : '',

  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
});
