module.exports = (data) => {
  let dataString = "";
  data.experience.forEach((experience) => {
    let descriptionString = "";
    experience.descriptions.forEach((description) => {
      descriptionString += `\\item ${description}`;
    });
    dataString += `
            \\begin{tabularx}{\\linewidth}{ @{}l c@{}l r@{} }
            \\textbf{${experience.title}} & \\textbf{${experience.company} - ${experience.location}} &  \\hfill ${experience.from} - ${experience.to}\\\\[3.75pt]
            \\multicolumn{3}{@{}X@{}}{
            \\begin{minipage}[t]{\\linewidth}
            ${experience.generalDescription} \\\\[3.75pt]
            ${experience.tech}
                \\begin{itemize}[topsep=3pt,after=\\strut, leftmargin=1em, itemsep=3pt]
                    ${descriptionString}
                \\end{itemize}
            \\end{minipage}} 
            \\end{tabularx}
        `;
  });

  return `

%----------------------------------------------------------------------------------------
% EXPERIENCE SECTIONS
%----------------------------------------------------------------------------------------

%Experience
\\section{Work Experience}

${dataString}

`;
};
