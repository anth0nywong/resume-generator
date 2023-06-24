const templates = require("./templates");

let latexFunction;

module.exports = (data) => {
  templates.forEach((template) => {
    console.log(template);
    if (template.name == data.template) {
      latexFunction = template.latexFunction;
    }
  });
  if (!latexFunction) {
    throw new Error("No such template!");
  } else {
    const res = latexFunction;
    latexFunction = null;
    return res;
  }
};
