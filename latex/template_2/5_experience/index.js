module.exports = (data) => {
  let dataString = "";
  data.experience.content.forEach((experience) => {
    dataString += `
            \\begin{tabularx}{\\linewidth}{ @{}l c@{}l r@{} }
            \\textbf{${experience.title}} & \\textbf{${experience.company} - ${experience.location}} &  \\hfill ${experience.from} - ${experience.to}\\\\[3.75pt]
            \\multicolumn{3}{@{}X@{}}{
            \\begin{minipage}[t]{\\linewidth}
            ${experience.tech}
            \\end{minipage}} 
            \\end{tabularx}
        `;
  });

  return `

%----------------------------------------------------------------------------------------
% EXPERIENCE SECTIONS
%----------------------------------------------------------------------------------------

%Experience
\\section{${data.experience.title}}

${dataString}

`;
};
