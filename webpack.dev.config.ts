const path = require('path');
import { Configuration, HotModuleReplacementPlugin } from "webpack";
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import ESLintPlugin from "eslint-webpack-plugin";
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const config: Configuration = {
  mode: 'development',
  entry: "./src/index.tsx",
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        rules: [
          {
            test: /\.(ts|js)x?$/i,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                  "@babel/preset-env",
                  "@babel/preset-react",
                  "@babel/preset-typescript",
                ],
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
    devServer: {
      static: path.join(__dirname, "build"),
      historyApiFallback: true,
      port: 4000,
      open: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html",
      }),
      new HotModuleReplacementPlugin(),
      new ESLintPlugin({
        extensions: ["js", "jsx", "ts", "tsx"],
      }),
      new ForkTsCheckerWebpackPlugin({
        async: false
      })
    ],
};

export default config;
