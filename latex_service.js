const latex = require("node-latex");
const fs = require("fs");

module.exports = function compilePDF(inputTex, outputTex, callback) {
  try {
    const input = fs.createReadStream(inputTex);
    const output = fs.createWriteStream(outputTex);

    const pdf = latex(input);

    pdf.pipe(output);

    pdf.on("error", (err) => console.log(err));
    pdf.on("finish", () => {
      console.log("PDF generated!");
      callback();
    });
  } catch (err) {
    console.log("try catch");
  }
};
