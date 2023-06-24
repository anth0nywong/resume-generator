module.exports = (data) => {
  let dataString = "";
  let icon = data.skills.icon;
  data.skills.data.forEach((skill) => {
    let skillString = "";
    skill.props.forEach((subSkill) => {
      skillString += `${subSkill} \\textbullet{} `;
    });
    skillString = skillString.substring(0, skillString.length - 14);
    dataString += `
    \\doubleSkill{\\${skill.icon}}{${skill.title}}{${icon ? skillString : ""}}
`;
  });

  return `
%----------------------------------------------------------------------------------------
%	SKILLS
%----------------------------------------------------------------------------------------
\\section{${data.skills.title}}
${dataString}
`;
};
