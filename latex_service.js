const latex = require("node-latex");
const fs = require("fs");

module.exports = function compilePDF(inputTex, outputTex, callback) {
  const input = fs.createReadStream(inputTex);
  const output = fs.createWriteStream(outputTex);

  const pdf = latex(input);

  pdf.pipe(output);

  pdf.on("error", (err) => console.error(err));
  pdf.on("finish", () => {
    console.log("PDF generated!");
    callback();
  });
};
