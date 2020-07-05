const paths = require("./paths.config.js");

module.exports = {
  presets: [
    ["@babel/preset-env", { modules: false }],
    "@babel/preset-react",
  ],
  env: {
    test: {
      presets: [
        "@babel/preset-env",
        "@babel/preset-react",
      ],
      plugins: [
        ["module-resolver", { root: [ paths.src, paths.res ] }]
      ],
    }
  }
};
