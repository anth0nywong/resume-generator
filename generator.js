const fs = require("fs");
const compiletPDF = require("./latex_service");
const latexFunc = require("./latex");

module.exports = {
  generator: async (data, path, callback) => {
    let temp = fs.createWriteStream("temp.tex");

    console.log("Generating temporary latex doucment.");
    const latex = latexFunc(data);
    console.log(latex);
    await latex(data).forEach(async (text) => {
      await temp.write(text);
    });

    await compiletPDF("temp.tex", path, (err) => {
      if (err) {
        console.log("Generator receive an error");
        console.log(err);
      }
      temp.close();
      callback();
    });
  },
  savedPath: __dirname,
};
