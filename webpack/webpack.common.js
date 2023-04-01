const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const projectPath = path.resolve(__dirname, "..");

module.exports = {
  entry: path.resolve(projectPath, "./src/index.tsx"),
  output: {
    path: path.resolve(projectPath, "./build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", "jsx", "json"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.module\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { modules: true },
          },
          "sass-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /\.module\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: [
      ".wasm",
      ".ts",
      ".tsx",
      ".jsx",
      ".mjs",
      ".cjs",
      ".js",
      ".json",
      ".jpg",
      ".png",
      ".jpeg",
      ".ico",
      ".css",
      ".scss",
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(projectPath, "./public/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
};
