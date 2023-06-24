module.exports = (data) => {
  let dataString = "";

  data.skills.content.forEach((section) => {
    let pointString = ``;
    section.props.forEach((point) => {
      pointString += `${point}, `;
    });
    dataString += `\\item ${section.title}: ${pointString}`;
    dataString = dataString.substring(0, dataString.length - 2);
  });

  return `
%----------------------------------------------------------------------------------------
%	SKILLS
%----------------------------------------------------------------------------------------
\\section{${data.skills.title}}
\\begin{itemize}[nosep,after=\\strut, leftmargin=1em, itemsep=3pt]
${dataString}
\\end{itemize}
`;
};
