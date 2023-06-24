module.exports = (data) => {
  let dataString = "";

  data.projects.forEach((project) => {
    let descriptionString = "";
    project.descriptions.forEach((description) => {
      descriptionString += `\\item ${description}`;
    });
    dataString += `
    \\begin{tabularx}{\\linewidth}{ @{}l r@{} }
    \\textbf{${project.title}}   & \\hfill 
    ${
      project.link ? ` \\href{${project.link.link}} {${project.link.name}}` : ``
    } ${
      project.link2
        ? `$|$ \\href{${project.link2.link}} {${project.link2.name}}`
        : ``
    }\\\\[3.75pt]
    \\multicolumn{2}{@{}X@{}}{
    \\begin{minipage}[t]{\\linewidth}
    ${project.tech ? `${project.tech}` : ``}
        \\begin{itemize}[nosep,after=\\strut, leftmargin=1em, itemsep=3pt]
           ${descriptionString}
        \\end{itemize}
    \\end{minipage}} 
    \\end{tabularx}`;
  });

  return `

%----------------------------------------------------------------------------------------
%	PROJECTS
%----------------------------------------------------------------------------------------
\\section{Projects}

${dataString}

`;
};
