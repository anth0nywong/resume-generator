module.exports = (data) => {
  let dataString = "";
  data.experience.content.forEach((experience) => {
    dataString += `
            \\begin{tabularx}{\\linewidth}{ @{}l c@{}l r@{} }
            \\textbf{${experience.position}} & \\textbf{${
      experience.company
    } - ${experience.location}} &  \\hfill ${experience.from} - ${
      experience.to
    }\\\\
    \\multicolumn{3}{@{}X@{}}{
    \\begin{minipage}[t]{\\linewidth}
    ${getProjectString(experience)}
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
        \\textbf{Environment:} ${project.tech ? `${project.tech}` : ``}
        \\vspace{5pt}
    \\end{minipage} `;
  });

  return projectString;
};
