// Skills Section Logos
import htmlLogo from './assets/tech_logo/html.png';
import rLogo from './assets/tech_logo/r.png';
import excelLogo from './assets/tech_logo/excel.png';
import powerbiLogo from './assets/tech_logo/powerbi.webp';
import tableauLogo from './assets/tech_logo/tableau1.png';
import jupyterLogo from './assets/tech_logo/jupyter.svg';
import colabLogo from './assets/tech_logo/colab.png';
import houseLogo from './assets/work_logo/chatGPT_IMAGE.png';

import pythonLogo from './assets/tech_logo/python.png';
import flaskLogo from './assets/tech_logo/flask.png';
import nlpLogo from './assets/tech_logo/nlp1.png';
import mlLogo from './assets/tech_logo/ml1.png';
import genaiLogo from './assets/tech_logo/ai.png';
import dlLogo from './assets/tech_logo/dl.png';
import nnLogo from './assets/tech_logo/nn1.png';

import cssLogo from './assets/tech_logo/css.png';
import jsLogo from './assets/tech_logo/javascript.png';
import reactLogo from './assets/tech_logo/reactjs.png';
import nodeLogo from './assets/tech_logo/nodejs.png';

import mysqlLogo from './assets/tech_logo/mysql.png';
import mongoLogo from './assets/tech_logo/mongodb.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';

import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png';
import mysqlworkbenchLogo from './assets/tech_logo/mysql.png';


// Skills Info Section
export const SkillsInfo = [
  {
    title: 'Data Analysis',
    skills: [
      { name: 'R', logo: rLogo },
      { name: 'Excel', logo: excelLogo },
      { name: 'PowerBI', logo: powerbiLogo },
      { name: 'Tableau', logo: tableauLogo },
      { name: 'Jupyter', logo: jupyterLogo },

      { name: 'VS Code', logo: vscodeLogo },
      { name: 'SQL', logo: mysqlworkbenchLogo },
      { name: 'Google Colab', logo: colabLogo },
    ],
  },
  {
    title: 'Data Science',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'Flask', logo: flaskLogo },
      { name: 'NLP', logo: nlpLogo },
      { name: 'Machine Learning', logo: mlLogo },
      { name: 'AI', logo: genaiLogo },
      { name: 'Deep Learning', logo: dlLogo },
      { name: 'Neural Networks', logo: nnLogo },
      { name: 'MongoDB', logo: mongoLogo },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: jsLogo },
      { name: 'React JS', logo: reactLogo },
      { name: 'Node JS', logo: nodeLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'R', logo: rLogo },
      { name: 'Flask', logo: flaskLogo },
      { name: 'JavaScript', logo: jsLogo },
    ],
  },

   
];


  
  export const projects = [
    {
      id: 0,
      title: "Housing Price Calculator",
      description:
        "An interactive Flask web application that predicts housing prices in Boston based on 13 input features like crime rate, number of rooms, property tax, and more. Powered by a trained machine learning model using scikit-learn and deployed on Render, this app showcases real-world ML deployment skills and offers an intuitive UI for users to estimate housing prices.",
      image: houseLogo, // replace with actual image variable or import
      tags: ["Python", "Flask", "Machine Learning", "scikit-learn", "HTML", "CSS", "Render"],
      github: "https://github.com/harshit-byte1/housing-price-calculator", // replace with actual GitHub repo URL
      webapp: "https://housing-price-calculator-1.onrender.com/",
    },
    
    
  ];  
