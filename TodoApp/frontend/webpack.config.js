const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    path: __dirname + "/public",
    filename: "./app.js"
  },
  devServer: {
    port: 8080,
    contentBase: "./public"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.js[x]$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader"
        ]
      },
      {
        test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "app.css"
    })
  ]
};
