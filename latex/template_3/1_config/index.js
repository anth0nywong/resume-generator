module.exports = (data) => {
  return `%-----------------------------------------------------------------------------------------------------------------------------------------------%
%	The MIT License (MIT)
%
%	Copyright (c) 2023 Anth0nyWong
%
%	Permission is hereby granted, free of charge, to any person obtaining a copy
%	of this software and associated documentation files (the "Software"), to deal
%	in the Software without restriction, including without limitation the rights
%	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
%	copies of the Software, and to permit persons to whom the Software is
%	furnished to do so, subject to the following conditions:
%	
%	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
%	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
%	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
%	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
%	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
%	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
%	THE SOFTWARE.
%	
%
%-----------------------------------------------------------------------------------------------------------------------------------------------%

%----------------------------------------------------------------------------------------
%	DOCUMENT DEFINITION
%----------------------------------------------------------------------------------------

% article class because we want to fully customize the page and not use a cv template
\\documentclass[a4paper,11pt]{article}

%----------------------------------------------------------------------------------------
%	FONT
%----------------------------------------------------------------------------------------

\\usepackage{helvet}
\\renewcommand{\\familydefault}{\\sfdefault}

%----------------------------------------------------------------------------------------
%	PACKAGES
%----------------------------------------------------------------------------------------
\\usepackage{url}
\\usepackage{parskip} 	

%other packages for formatting
\\RequirePackage{color}
\\RequirePackage{graphicx}
\\usepackage[usenames,dvipsnames]{xcolor}
\\usepackage[scale=0.9]{geometry}
\\usepackage{fontawesome5}

%tabularx environment
\\usepackage{tabularx}

%for lists within experience section
\\usepackage{enumitem}

% centered version of 'X' col. type
\\newcolumntype{C}{>{\\centering\\arraybackslash}X} 

%to prevent spillover of tabular into next pages
\\usepackage{supertabular}
\\usepackage{tabularx}
\\usepackage{tabto}
\\newlength{\\fullcollw}
\\setlength{\\fullcollw}{0.47\\textwidth}

%custom \\section
\\usepackage{titlesec}				
\\usepackage{multicol}
\\usepackage{multirow}


%----------------------------------------------------------------------------------------
%	ATS Settings
%----------------------------------------------------------------------------------------


\\input{glyphtounicode}

\\pdfgentounicode=1

%----------------------------------------------------------------------------------------
%	Customs Skills Bar
%----------------------------------------------------------------------------------------

%%% boxAwesome Macro %%%

\\newcommand{\\boxAwesome}[1]{
   \\makebox[1.50em][c]{
      #1
   }
}

%%% Skills Macro %%%

\\newcommand{\\doubleSkill}[3]{
    \\noindent\\hangindent=1.5em\\hangafter=0
    \\parbox{30\\spacebox} {
        \\boxAwesome{#1} \\textbf{#2}
        \\negxvspace
    } \\negxvspace \\mhspace {#3} \\par
}


% Horizontal %

\\newlength{\\spacebox}
\\settowidth{\\spacebox}{123456789}

\\newcommand{\\xhspace}{\\hspace*{0.1em}}
\\newcommand{\\shspace}{\\hspace*{0.5em}}
\\newcommand{\\mhspace}{\\hspace*{2.2em}}

\\newcommand{\\negxhspace}{\\hspace*{-0.2em}}
\\newcommand{\\negshspace}{\\hspace*{-0.5em}}
\\newcommand{\\negmhspace}{\\hspace*{-1em}}
\\newcommand{\\neghhspace}{\\hspace*{-1.5em}}

% Vertical %

\\newcommand{\\negxvspace}{\\vspace*{-0.1em}}
\\newcommand{\\negsvspace}{\\vspace*{-0.5em}}
\\newcommand{\\negmvspace}{\\vspace*{-1em}}
\\newcommand{\\neghvspace}{\\vspace*{-1.5em}}

\\newcommand{\\svspace}{\\vspace*{0.5em}}
\\newcommand{\\mvspace}{\\vspace*{1em}}

%CV Sections inspired by: 
%http://stefano.italians.nl/archives/26
\\titleformat{\\section}{\\large\\scshape\\raggedright}{}{0em}{}[\\titlerule]
\\titlespacing{\\section}{0pt}{8pt}{5pt}

%for publications
\\usepackage[style=authoryear,sorting=ynt, maxbibnames=2]{biblatex}

%Setup hyperref package, and colours for links
\\usepackage[unicode, draft=false]{hyperref}
\\definecolor{linkcolour}{rgb}{0,0.2,0.6}
\\hypersetup{colorlinks,breaklinks,urlcolor=linkcolour,linkcolor=linkcolour}
\\addbibresource{citations.bib}
\\setlength\\bibitemsep{1em}

%for social icons
\\usepackage{fontawesome5}

%debug page outer frames
%\\usepackage{showframe}

%----------------------------------------------------------------------------------------
%	BEGIN DOCUMENT
%----------------------------------------------------------------------------------------
\\begin{document}

% non-numbered pages

\\pagestyle{empty} `;
};
