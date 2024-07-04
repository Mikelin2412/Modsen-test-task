const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.(png|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new Dotenv({
      path: `./.env`,
      prefix: 'process.env.',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: true,
    port: 3000,
    historyApiFallback: true,
  },
};
