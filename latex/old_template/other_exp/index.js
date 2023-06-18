module.exports = (data) => {
  let dataString = "";

  (() => {
    data.otherExperience.forEach((experience) => {
      dataString += `
    \\begin{tabularx}{\\linewidth}{ @{}l c@{}l r@{} }
    \\textbf{${experience.title}} \\\\ [3.75pt]
    ${experience.company} &  \\hfill ${experience.from} - ${experience.to} \\\\ [-10pt]
    \\multicolumn{2}{@{}X@{}}{}
    \\end{tabularx}
`;
    });
  })();

  return `

%----------------------------------------------------------------------------------------
%	OTHER EXPERIENCE
%----------------------------------------------------------------------------------------

\\section{Other Experience}
${dataString}
`;
};
