const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ImageMinPlugin = require ('imagemin-webpack-plugin');



module.exports = {
  devtool: false,
  mode: "production",
  entry: {
    main: [
      
      './src/index.js',
     
    ],
   
  },
  output: {
    path: path.resolve(__dirname, "/dist"),
    
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react'],
          },
        }],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          
          },
          {
            loader: 'css-loader',
            
          },
          
         
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: ['bundle.js'],
    }),
    
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
  
  ],
  optimization: {
    minimizer: [
      
     
     
    ],
  },
};