const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "app/app.ts"),
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "app/public"),
    filename: "bundle.js"
  }
};
