module.exports = (data) => {
  let dataString = "";

  data.projects.content.forEach((project) => {
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
