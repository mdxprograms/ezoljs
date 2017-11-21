module.exports = {
  entry: "./src/ezol.js",
  output: {
    path: __dirname + "/dist",
    filename: "ezol.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"]
          }
        }
      }
    ]
  }
};
