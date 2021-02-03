const webpack = require("webpack");

const nodeENV = process.env.NODE_ENV || "production";

module.exports = {
  entry: {
    filename: "./src/section-4/webpack-modules/app1.js",
  },
  output: {
    filename: "build.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": { NODE_ENV: JSON.stringify(nodeENV) },
    }),
  ],
};
