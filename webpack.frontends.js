const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    HelloReact: path.resolve(__dirname, "frontends/HelloReact/register.ts")
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: "awesome-typescript-loader",
        exclude: /node_modules/
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "frontends/public")
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};
