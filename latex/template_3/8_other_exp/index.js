module.exports = (data) => {
  let dataString = "";
  data.otherExperience.content.forEach((otherExperience) => {
    dataString += `
            \\begin{tabularx}{\\linewidth}{ @{}l c@{}l r@{} }
            \\textbf{${otherExperience.position}} & \\textbf{${
      otherExperience.company
    } - ${otherExperience.location}} &  \\hfill ${otherExperience.from} - ${
      otherExperience.to
    }\\\\
    \\multicolumn{3}{@{}X@{}}{
    \\begin{minipage}[t]{\\linewidth}
    ${getProjectString(otherExperience)}
    \\end{minipage}} 
            
            \\end{tabularx}
            
        `;
  });

  return `

%----------------------------------------------------------------------------------------
% otherExperience SECTIONS
%----------------------------------------------------------------------------------------

%otherExperience
\\section{${data.otherExperience.title}}

${dataString}

`;
};

const getProjectString = (data) => {
  let projectString = "";

  data.projects.forEach((project) => {
    let descriptionString = "";
    project.descriptions.forEach((description) => {
      descriptionString += `\\item ${description}`;
    });
    projectString += `
    ${project.title}
    
    \\begin{minipage}[t]{\\linewidth}
    ${project.generalDescription ? `${project.generalDescription}` : ``}
        \\begin{itemize}[nosep,after=\\strut, leftmargin=1em, itemsep=3pt]
           ${descriptionString}
        \\end{itemize}
        \\vspace{5pt}
    \\end{minipage} `;
  });

  return projectString;
};
