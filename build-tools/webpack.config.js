const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app:  ["regenerator-runtime/runtime.js", "./src/index.tsx"],
    vendor: ["react", "react-dom"],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  devServer: {
    contentBase: "./dist",
    port: 8000,
    historyApiFallback: true,

  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: "/node_modules",
        loader: "babel-loader",
      },
      {
        test: /\.(woff2|woff|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({template: './src/index.html'})]
};
