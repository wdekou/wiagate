import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.config.server';

import appConfig from '../config/default';

const { port, host } = appConfig.webpack.server;

const additionalConfig = {
  output: 
    {
      publicPath: `${host}:${port}${baseConfig.output.publicPath}`
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      },
      __DEV__: true,
    })
  ]
  
};

export default merge(baseConfig, additionalConfig);
