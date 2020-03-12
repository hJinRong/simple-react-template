const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const glob = require("glob");

module.exports = {
  entry: [...glob.sync("./src/*.jsx"), ...glob.sync("./src/*.js")],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Output Management",
      inject: false,
      template: require("html-webpack-template"),
      bodyHtmlSnippet: '<div id="root"></div>'
    })
  ],
  devServer: {
    contentBase: "./dist",
    port: 9000
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"]
          }
        }
      }
    ]
  }
};
