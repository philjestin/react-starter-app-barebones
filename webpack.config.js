const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

module.exports = {
  entry: {
    index: './src/index.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: isDevelopment 
      ? '[name].bundle.js'
      : '[name].bundle-[hash:6].js',
    chunkFilename: isDevelopment
      ? '[name].bundle.js'
      : '[name].bundle-[hash:6].js',
  },
  devtool: isDevelopment
    ? 'eval-source-map'
    : 'source-map',
  devServer: {
    inline: true,
    contentBase: './public',
    port: 9001,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'], // 'eslint-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
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
          }
        ]
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        loader: 'file?name=public/fonts/[name].[ext]'
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
        query: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
    ],
  },
  plugins: [
    htmlWebpackPlugin,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        node_vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 1
        }
      }
    },
  }
};
