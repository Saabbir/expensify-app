const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PUBLISH_DIRECTORY = 'dist';

module.exports = (env) => {
  const isProduction = env.production;
  
  return {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, PUBLISH_DIRECTORY, 'assets'),
      clean: true,
    },    
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        use: [
          // fallback to style-loader in development
          isProduction ? 
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          } : 
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },
        ],
      }
    ]
    },
    // https://webpack.js.org/plugins/split-chunks-plugin/#split-chunks-example-2
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },  
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.resolve(__dirname, PUBLISH_DIRECTORY),
      hot: true,
      writeToDisk: true,
      historyApiFallback: true
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: path.resolve(__dirname, PUBLISH_DIRECTORY, 'index.html'),
        publicPath: '/assets/'
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      }),
      new CopyPlugin({
        patterns: [
          { 
            from: path.resolve(__dirname, 'static/images'), 
            to: path.resolve(__dirname, PUBLISH_DIRECTORY, 'assets/images') 
          },
        ],
      }),      
    ],
  }
};