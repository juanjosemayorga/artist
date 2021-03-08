const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      '@Components': path.resolve(__dirname, 'src/components/'),
      '@Assets': path.resolve(__dirname, 'src/assets/'),
      '@Data': path.resolve(__dirname, 'src/data/'),
      '@Pages': path.resolve(__dirname, 'src/pages/'),
      '@Hooks': path.resolve(__dirname, 'src/hooks/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use:[
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader'
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "assests/[name].css",
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    host: '192.168.1.89'
  },
};