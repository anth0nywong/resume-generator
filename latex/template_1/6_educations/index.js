module.exports = (data) => {
  let dataString = "";

  data.educations.forEach((education) => {
    dataString += `${education.from} - ${education.to} \\
    \\begin{minipage}[t]{0.875\\linewidth}
    ${education.degree} ${
      education.gpa
        ? `\\hfill\\normalsize (GPA: ${education.gpa}/${education.gpaMax})`
        : ``
    } \\\\
    \\textbf{${education.college}} 
    \\end{minipage} \\\\${education.margin ? `[${education.margin}]` : ``}
    `;
  });

  return `
%----------------------------------------------------------------------------------------
%	EDUCATIONs
%----------------------------------------------------------------------------------------
\\section{Education}
\\begin{tabularx}{\\linewidth}{@{}l X@{}}	
${dataString}

    
\\end{tabularx}
`;
};
