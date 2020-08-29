const withOptimizedImages = require('next-optimized-images');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withOptimizedImages({
  basePath: isProd ? '/victorkuo' : '',
  assetPrefix: isProd ? '/victorkuo/' : '',
});
