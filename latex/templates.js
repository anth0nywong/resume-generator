const { readdirSync } = require("fs");

let array = [];

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

getDirectories("./latex").forEach((template) => {
  array.push(require("./" + template));
});

console.log("Template " + array);

module.exports = array;
