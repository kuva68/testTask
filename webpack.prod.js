const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer =require('autoprefixer')





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
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader,
              "css-loader",
              "style-loader",
              {
                loader: "postcss-loader",
                options: {
                  postcssOptions: {
                    plugins: [
                      [
                        autoprefixer,
                        {
                          // Options
                        },
                      ],
                    ],
                  },
                },
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
    new MiniCssExtractPlugin(),
    new MiniCssExtractPlugin()
  
  ],
  optimization: {
    minimizer: [
      
      new CssMinimizerPlugin()
     
    ],
  },
};