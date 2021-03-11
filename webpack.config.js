const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: ['@babel/polyfill', './index.ts'],
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    watchContentBase: true,
    port: 3000,
    hot: true,
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-typescript',
          ],
        },
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
  })],
};
