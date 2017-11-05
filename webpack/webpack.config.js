import path from 'path';
import webpack from 'webpack';

const rootFolder = path.resolve(__dirname, '..');
const config = {
  context: rootFolder,
  
    entry: {
      main: './src/client',
      vendor: [
        `bootstrap-loader/lib/bootstrap.loader?configFilePath=${__dirname}/../.bootstraprc!bootstrap-loader/no-op.js`,
        'font-awesome-loader'
      ]
    },
  
    output: {
      path: path.resolve(rootFolder, 'dist/client'),
      publicPath: '/',
      filename: '[name].[hash].js',
      chunkFilename: '[name].[hash].chunck.js'    
    },
  
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js?$/,
          exclude: /node_modules/,
          use: 'eslint-loader'
        },
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
          use: 'url-loader?limit=10000'
        },
        {
          test: /\.(eot|ttf|wav|mp3)$/,
          use: 'file-loader'
        },
        {
          test: /\.(scss)$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader : 'css-loader',
              options:
                {
                  importLoaders : 2,
                  sourceMap     : true
                }
            },
            {
              loader : 'postcss-loader',
              options: {
                sourceMap : true
              }
            },
            {
              loader : 'sass-loader',
              options: {
                outputStyle       : 'expanded',
                sourceMap         : true,
                sourceMapContents : true
              }
            }
          ]
        },
        {
          test: /\.(css)$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                sourceMap: true
              }
            },
            'postcss-loader'            
          ]
        }
      ]
    },
  
    plugins: [
    
    ],

    resolve: {
      
    }
}

export default config;
