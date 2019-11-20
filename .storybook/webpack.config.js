const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.css$/,
      use: [],
    },
    {
      test: /\.stories\.jsx?$/,
      loaders: [require.resolve('@storybook/source-loader')],
      enforce: 'pre',
    },
  ),
    config.plugins.push(
      new CopyWebpackPlugin([
        {
          from: path.resolve('public'),
          to: path.resolve('.next/static'),
        },
      ]),
    );
  config.node = {
    fs: 'empty',
  };
  return config;
};
