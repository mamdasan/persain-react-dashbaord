const path = require("path");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public/assets"),
    publicPath: "http://localhost:4000/assets/",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre",
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    client: {
      progress: true,
    },
    open: true,
    port: 4000,
    hot: "only",
  },
};
