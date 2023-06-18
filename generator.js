const fs = require("fs");
const compiletPDF = require("./latex_service");
const latexFunc = require("./latex");

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

module.exports = {
  generator: async (data, callback) => {
    let temp = fs.createWriteStream("temp.tex");

    console.log("Generating temporary latex doucment.");
    const latex = latexFunc(data);
    await latex.forEach(async (text) => {
      await temp.write(text);
    });

    await compiletPDF("temp.tex", "Anthony_Wong_CV.pdf", () => {
      temp.close();
      callback();
    });
  },
  savedPath: __dirname + "Anthony_Wong_CV.pdf",
};
