import webpack from 'webpack';
import merge from 'webpack-merge';
import { clientConfiguration } from 'universal-webpack';
import settings from './universal-webpack-settings';
import baseConfig from './webpack.config';

const additionalConfig = {
  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
    }),
  ],

  resolve: {
    extensions: ['.web.js', '.js'],
  }
};

export default function (options) {
  return clientConfiguration(merge(baseConfig, additionalConfig), settings, options);
}
