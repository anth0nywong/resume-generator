module.exports = (data) => {
  let dataString = "";
  let x = 0;
  data.title.links.forEach((link) => {
    x++;
    dataString += `
        \\href{${link.link}}{\\raisebox{-0.05\\height}\\${link.icon}\\ ${link.text}} \\ $|$ \\`;
    if (x >= data.title.eachRowLinks) {
      x = 0;
      dataString = dataString.substring(0, dataString.length - 7);
      dataString += "\\\\";
    }
  });
  if (x != 0) {
    dataString = dataString.substring(0, dataString.length - 7);
    dataString += "\\\\";
  }
  return `


%----------------------------------------------------------------------------------------
%	TITLE
%----------------------------------------------------------------------------------------

% \\begin{tabularx}{\\linewidth}{ @{}X X@{} }
% \\huge{Your Name}\\vspace{2pt} & \\hfill \\emoji{incoming-envelope} email@email.com \\\\
% \\raisebox{-0.05\\height}\\faGithub\\ username \\ | \\
% \\raisebox{-0.00\\height}\\faLinkedin\\ username \\ | \\ \\raisebox{-0.05\\height}\\faGlobe \\ mysite.com  & \\hfill \\emoji{calling} number
% \\end{tabularx}

\\begin{tabularx}{\\linewidth}{@{} C @{}}
\\Huge{${data.title.name}} \\\\[7.5pt]
${dataString}
\\end{tabularx}
`;
};
