const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const outputDir = path.join(__dirname, "build/");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  entry: "./src/Index.bs.js",
  mode: isProd ? "production" : "development",
  output: {
    path: outputDir,
    filename: "Index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      inject: false,
    }),
    isProd ? new BundleAnalyzerPlugin() : undefined,
  ].filter(Boolean),
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: "babel-loader",
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: "file-loader",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: "file-loader",
      },
    ],
  },
  devServer: {
    compress: true,
    contentBase: outputDir,
    port: process.env.PORT || 8000,
    historyApiFallback: true,
  },
};
