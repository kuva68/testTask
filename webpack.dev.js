const path = require("path");
const webpack = require("webpack");

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require ('html-webpack-plugin');



module.exports = {
    mode: "development",
  entry: {
    main: [
      
      './src/index.js',
     
    ],
   
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: 'bundle.js',
  },
  devServer: {
    static: './public',  
    historyApiFallback: true,
    port: 3000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react'],
            cacheDirectory: true,
            plugins: ['react-hot-loader/babel'],
          },
        }],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
         
        ],
      },
      {
        test: /\.(png|gif|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
          'img-loader',
        ],
      },
    ],
  },
  devtool: 'inline-source-map',
  
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        devServer: true,
      },
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: ['bundle.js'],
    }),
    new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin({
        title: 'Development'
      })
  ],
};