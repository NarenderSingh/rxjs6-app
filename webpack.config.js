var path = require("path");

module.exports = {
  entry: {
    app: "./src/async.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: path.resolve(__dirname, "src"),
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env"],
        },
      },
    ],
  },
};
