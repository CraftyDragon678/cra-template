const path = require('path');
const {
  override,
  addBabelPlugin,
  addBabelPreset,
  addWebpackAlias,
} = require('customize-cra');

module.exports = override(
  addBabelPlugin('@babel/plugin-proposal-optional-chaining'),
  addBabelPreset('@emotion/babel-preset-css-prop'),
  addWebpackAlias({
    '@src': path.resolve(__dirname, './src'),
  }),
);
