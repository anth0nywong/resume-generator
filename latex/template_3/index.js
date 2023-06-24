const path = require("path");

const { readdirSync } = require("fs");

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const latexFunction = (data) => {
  let latex = [];
  console.log(getDirectories("./latex/" + path.basename(__dirname)));
  getDirectories("./latex/" + path.basename(__dirname)).forEach((component) => {
    latex.push(require("./" + component)(data));
  });
  return latex;
};

module.exports = {
  name: path.basename(__dirname),
  latexFunction: latexFunction,
};
