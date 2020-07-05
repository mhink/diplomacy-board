const path = require("path");
const BASE_PATH = path.resolve(__dirname);

module.exports = {
  base:   BASE_PATH,
  src:    path.resolve(BASE_PATH, "src"),
  dist:   path.resolve(BASE_PATH, "dist"),
  res:    path.resolve(BASE_PATH, "res"),
};
