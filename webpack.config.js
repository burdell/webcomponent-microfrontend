const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    HelloWorld: "./frontends/HelloWorld/index.ts"
  },
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
    path: path.resolve(__dirname, "./frontends/public")
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};
