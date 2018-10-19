const path = require("path");
module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index.js")
  },
  output: {
    filename: "[name].js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true
  }
};
