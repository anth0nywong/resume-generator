module.exports = (data) => {
  let dataString = "";

  data.summary.content.forEach((point) => {
    dataString += `\\item ${point}`;
  });

  return `

%----------------------------------------------------------------------------------------
%	Summary
%----------------------------------------------------------------------------------------
\\begin{tabularx}{\\linewidth}{@{} C @{}}
\\textbf{${data.summary.job_title}} \\\\[7.5pt]
\\end{tabularx}

\\section{${data.summary.title}}
\\begin{itemize}[nosep,after=\\strut, leftmargin=1em, itemsep=3pt]
${dataString}
\\end{itemize}`;
};
