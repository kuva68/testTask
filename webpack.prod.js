const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require('html-webpack-plugin');






module.exports = {
  devtool: false,
  mode: "production",
  entry: {
    main: [
      
      './src/index.js',
     
    ],
   
  },
  output: {
    filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
    
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
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            
          },
          
         
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './public/index.html',
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: ['bundle.js'],
    }),
    
   
  
  ],
  optimization: {
    minimizer: [
      
     
     
    ],
  },
};