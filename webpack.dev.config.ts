import * as path from 'path';
import { Configuration, HotModuleReplacementPlugin } from "webpack";
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

export const config: Configuration = {
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
          {
             test: /\.s[ac]ss$/,
             use: [
               // Creates `style` nodes from JS strings
               { loader: "style-loader" },
               { loader: "css-modules-typescript-loader"},  
               // Translates CSS into CommonJS
               { loader: "css-loader", options: { modules: true } },
               // Compiles Sass to CSS
               { loader: "sass-loader" },
             ],
           },
           {
             test: /\.css$/,
             use: ['style-loader', 'css-loader']
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
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html",
      }),
      new HotModuleReplacementPlugin(),
    ],
};

export default config;
