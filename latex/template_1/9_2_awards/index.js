module.exports = (data) => {
  let dataString = "";

  data.awards.forEach((award) => {
    let descriptionString = "";
    award.descriptions.forEach((description) => {
      descriptionString += `\\item ${description}`;
    });
    dataString += `\\begin{tabularx}{\\linewidth}{@{}l X@{}}	
        ${award.date} \\
        \\begin{minipage}[t]{0.875\\linewidth}
        ${award.event} - ${award.award} \\hfill\\href{${award.link}}{Link}
                \\end{minipage}\\\\
        \\end{tabularx}
        \\begin{itemize}[nosep,after=\\strut, leftmargin=1em, itemsep=3pt]
        ${descriptionString}
        \\end{itemize}`;
  });

  return `
%----------------------------------------------------------------------------------------
%	AWARDS
%----------------------------------------------------------------------------------------
\\section{Awards}
${dataString}
`;
};
