module.exports = (data) => {
  let dataString = "";

  data.projects.content.forEach((project) => {
    let descriptionString = "";
    project.descriptions.forEach((description) => {
      descriptionString += `\\item ${description}`;
    });
    dataString += `
    \\begin{tabularx}{\\linewidth}{ @{}l r@{} }
    \\textbf{${project.position}}   & \\hfill
    
    ${project.from} - ${project.to}\\\\
    

    ${project.title} & \\hfill

    ${
      project.link ? ` \\href{${project.link.link}} {${project.link.name}}` : ``
    } ${
      project.link2
        ? `$|$ \\href{${project.link2.link}} {${project.link2.name}}`
        : ``
    }\\\\
    
    \\multicolumn{2}{@{}X@{}}{
    \\begin{minipage}[t]{\\linewidth}
    ${project.generalDescription ? `${project.generalDescription}` : ``}
        \\begin{itemize}[nosep,after=\\strut, leftmargin=1em, itemsep=3pt]
           ${descriptionString}
        \\end{itemize}
        \\textbf{Environment:} ${project.tech ? `${project.tech}` : ``}
        \\vspace{5pt}
    \\end{minipage}} 
    \\end{tabularx}`;
  });

  return `

%----------------------------------------------------------------------------------------
%	PROJECTS
%----------------------------------------------------------------------------------------
\\section{${data.projects.title}}
${dataString}
`;
};
