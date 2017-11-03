import webpack from 'webpack';
import path from 'path';
import nodeExternals from 'webpack-node-externals';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import 'dotenv';

const config = {
  context: path.resolve(__dirname),
  target: 'node',               // We build for node
  node: {
    __dirname: false,
    __filename: false,
  },
  entry: './src/bin/server.js',  // Application entry point
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.bundle.js'
  },
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder 
  devtool: 'source-map',
  module: {
    rules: [
      // Use eslint to validate JavaScript
      {
        enforce: 'pre',
        test: /\.js?$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      },
      // Use babel to build
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      // Allow loading of JSON files
      {
        test: /\.json$/,
        loader: 'json',
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }
      }
    }),

    new CopyWebpackPlugin([
      { from: 'src/views', to: 'views' },
      { from: 'src/public', to: 'public' },
    ])
  ]
}

export default config;
