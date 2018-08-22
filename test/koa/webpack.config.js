const path = require('path');
module.exports = {
  output: {
    path: path.resolve(__dirname, "dist"), // string
    publicPath: "/assets/", // string
    filename: "bundle.js", // string
  }
}