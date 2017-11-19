import webpack from 'webpack';
import merge from 'webpack-merge';
import { serverConfiguration } from 'universal-webpack';
import path from 'path';
import nodeExternals from 'webpack-node-externals';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import dotenv from 'dotenv';


import settings from './universal-webpack-settings';
import baseConfig from './webpack.config';

dotenv.config('../.env');

const additionalConfig = {
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder 
  resolve: {
    extensions: ['.ssr.js', '.web.js', '.js'],
  },
  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__: false,
      __SERVER__: true,
      'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
          DB_NAME: JSON.stringify(process.env.DB_NAME),
          DB_USERNAME: JSON.stringify(process.env.DB_USERNAME),
          DB_USER_PASSWORD: JSON.stringify(process.env.DB_USER_PASSWORD),
          DB_HOST: JSON.stringify(process.env.DB_HOST),
          DB_TYPE: JSON.stringify(process.env.DB_TYPE),
          APP_SECRET: JSON.stringify(process.env.APP_SECRET),
      }
    }),

    new CopyWebpackPlugin([
      { from: 'src/server/views', to: 'views' },
      { from: 'src/server/public', to: 'public' },
    ])
  ]
}

export default serverConfiguration(merge(baseConfig, additionalConfig), settings);
