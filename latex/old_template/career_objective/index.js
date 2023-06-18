module.exports = (data) => {
  return `

%----------------------------------------------------------------------------------------
%	Career Objective
%----------------------------------------------------------------------------------------
\\section{${data.summary.title}}
\\begin{minipage}[t]{\\linewidth}
${data.summary.content}
\\end{minipage}
`;
};
