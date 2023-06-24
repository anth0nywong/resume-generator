module.exports = (data) => {
  let dataString = "";

  data.training.content.forEach((point) => {
    dataString += `\\item ${point}`;
  });

  return `

%----------------------------------------------------------------------------------------
%	TRAINING
%----------------------------------------------------------------------------------------

\\section{${data.training.title}}
\\begin{itemize}[nosep,after=\\strut, leftmargin=1em, itemsep=3pt]
${dataString}
\\end{itemize}`;
};
