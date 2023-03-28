const path = require("path");
const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "..", "public"),
    },
    compress: true,
    port: 8080,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  output: {
    publicPath: "/",
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.DefinePlugin({ "process.env.name": JSON.stringify("Vishwas") }),
    new ReactRefreshWebpackPlugin(),
  ],
};
