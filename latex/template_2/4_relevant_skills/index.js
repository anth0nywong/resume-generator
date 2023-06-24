module.exports = (data) => {
  let dataString = "";

  data.relevant_skills.content.forEach((section) => {
    let pointString = ``;
    section.array.forEach((point) => {
      pointString += `\\item ${point}`;
    });
    dataString += `\\textbf{${section.name}} \\
    \\begin{itemize}[nosep,after=\\strut, leftmargin=1em, itemsep=3pt]
    ${pointString}
    \\end{itemize}`;
  });

  return `
%----------------------------------------------------------------------------------------
%	SKILLS
%----------------------------------------------------------------------------------------
\\section{${data.relevant_skills.title}}
${dataString}
`;
};
