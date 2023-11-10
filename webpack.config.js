const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
      minify: false,
    }),
  ],
};
