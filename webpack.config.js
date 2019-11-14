"use strict"

const path = require("path")

module.exports = {
  devtool: "inline-source-map",
  entry: "./client/app.tsx",
  output: {
    path: path.resolve(__dirname, '.generated'),
    filename: "bundle.js"
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
}
