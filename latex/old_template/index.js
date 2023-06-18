const config = require("./config");
const objective = require("./career_objective");
const title = require("./title");
const skills = require("./skills");
const experience = require("./experience");
const educations = require("./educations");
const project = require("./projects");
const other_exp = require("./other_exp");
const awards = require("./awards");
const page_end = require("./page_end");

module.exports = (data) => {
  var latex = [];
  latex.push(config);
  latex.push(title(data));
  latex.push(objective(data));
  latex.push(skills(data));
  latex.push(experience(data));
  latex.push(educations(data));
  latex.push(project(data));
  latex.push(other_exp(data));
  latex.push(awards(data));
  latex.push(page_end);

  return latex;
};
