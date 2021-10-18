import * as path from 'path';
import { Configuration, HotModuleReplacementPlugin } from "webpack";
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as MiniCssExtractPlugin from "mini-css-extract-plugin";

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
               { loader: "css-modules-typescript-loader"},  // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
               // Translates CSS into CommonJS
               { loader: "css-loader", options: { modules: true } },  // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
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
      new MiniCssExtractPlugin(),
    ],
};

export default config;
