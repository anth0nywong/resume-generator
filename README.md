## Resume Generator

## Description

An desktop application to generate pdf resume requiring user information in one json file only.

## How to use

Install the application with msi or squirrel installer of release. Run it with the administrator right.

(if you installed with squirrel installer, the application will be installed at C:\Users\Your_User\AppData\Local\latex-resume-generator)

Modify the [json template](https://github.com/anth0nywong/resume-generator/tree/main/data_template) with your information.

Upload your JSON file in the application and submit it, the pdf will be generated at your app installation location.

## Demo

[Interface](https://anth0nywong.github.io/resume-generator)

[Sample Resume](https://anth0nywong.github.io/resume-generator/output/Anthony%20Wong_resume.pdf)

Three templates are created, more templates will be available in the future.

## Tech

#### NodeJS v18.0.0

#### Electron Forge

(https://www.electronforge.io/)

#### node-latex library

(https://github.com/saadq/node-latex)

## Options of Template

#### Title

eachRowLinks: Number of Items for each row of links in the title

links: An array of links in the title, which has 3 properties: link, icon, and text

icon: This application support [fontawesome5 in latex](https://ctan.org/pkg/fontawesome5).

#### Project

link and link2: for each project, you can include up to 2 links to show your demo, which should include the link and name properties description the link and the text displayed respectively.

#### Skills

icon: This is a boolean option to choose whether you display icons in your skill section or not.

#### Other experience

This section is optional. If you don't have it in your json, the generator will skip this section.
