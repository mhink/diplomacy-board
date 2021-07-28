const path = require("path");
const webpack = require("webpack");
const paths = require("./paths.config.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './index.js',
  context: paths.src,
  devtool: "source-map",
  mode: 'development',
  output: {
    path: paths.dist,
    filename: 'example.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules',
      paths.src,
      paths.res,
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Diplomacy',
      template: './index.html',
    }),
    new webpack.ProvidePlugin({
      "React":    ["react"],
      "ReactDOM": ["react-dom"],
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    hot: false,
    liveReload: false,
    host: '0.0.0.0',
    port: 3000,
    clientLogLevel: 'warn',
  },
  module: {
    rules: [{
      oneOf: [{
        exclude: /node_modules/,
        test: /\.jsx?$/,
        loader: 'babel-loader',
      }, {
        exclude: /node_modules/,
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
            }
          },
          "postcss-loader",
        ]
      }]
    }]
  }
};
