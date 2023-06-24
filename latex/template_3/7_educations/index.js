module.exports = (data) => {
  let dataString = "";
  data.educations.content.forEach((education) => {
    dataString += `
    \\begin{minipage}[t]{\\linewidth}
    ${education.degree} ${
      education.gpa ? ` (GPA: ${education.gpa}/${education.gpaMax})` : ``
    } \\hfill\\normalsize ${education.year}
    ${
      education.college
        ? `
      \\begin{itemize}[nosep,after=\\strut, leftmargin=1em, itemsep=3pt]
           \\item\\textbf{\\small{${education.college}}} 
    \\end{itemize}
      `
        : ``
    }
    
    
    \\end{minipage} \\\\[10px]
    `;
  });

  return `
%----------------------------------------------------------------------------------------
%	EDUCATIONs
%----------------------------------------------------------------------------------------
\\section{${data.educations.title}}
\\begin{tabularx}{\\linewidth}{@{}l X@{}}	
${dataString}
\\end{tabularx}`;
};
