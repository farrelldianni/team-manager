"use strict";
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

function toEmployeeClass(data) {
  const { name, id, email, github, school, officeNumber } = data;
  if (data.role === "Engineer") {
    return new Engineer(name, id, email, github);
  }
  if (data.role === "Intern") {
    // return new Intern;
    return new Intern(name, id, email, school);
  }
  if (data.role === "Manager") {
    // return new Manager
    return new Manager(name, id, email, officeNumber);
  }
}

function createCard(employee) {
  const getUniqueProperty = () => {
    if (employee.role === "Engineer") {
      return employee.getGithub();
    }
    if (employee.role === "Intern") {
      return employee.getSchool();
    }
    if (employee.role === "Manager") {
      return employee.getOfficeNumber();
    }
    return "unexpected role🥴";
  };
  const uniqueProperty = getUniqueProperty();

  return `
  <div class="card">
  <div class="card-header">
    <div class="name">${employee.name}</div>
    <div class="role">${employee.role}</div>
  </div>
  <div class="card-body">
    <div class="id">${employee.id}</div>
    <div class="email">${employee.email}</div>
    <div class="unique-property">${uniqueProperty}</div>
  </div>
</div>
`;
}

function createTemplate(data) {
  const cards = [];

  for (const d of data) {
    const card = createCard(d);
    cards.push(card);
  }

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Team Profile Generator</title>
      <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./src/styles.css" />
    </head>
    <body>${cards}</body>
  </html>`;
}

const questions = [
  {
    name: "name",
    question: "What is your employee name?",
    type: "input",
  },
  {
    name: "id",
    question: "What is your employee ID",
    type: "input",
  },
  {
    name: "email",
    question: "What is your email?",
    type: "input",
  },
  {
    name: "role",
    question: "What is your role at the company",
    type: "list",
    choices: ["Manager", "Engineer", "Intern"],
  },
  {
    name: "office",
    question: "What office do you work at?",
    type: "input",
    when: (ans) => ans.role === "Manager",
  },
  {
    name: "github",
    question: "What is your github username?",
    type: "input",
    when: (ans) => ans.role === "Engineer",
  },
  {
    name: "school",
    question: "What school do you currently attend?",
    type: "input",
    when: (ans) => ans.role === "Intern",
  },
];

inquirer
  .prompt(questions)
  .then((data) => {
    fs.writeFileSync(
      `./dist/index.html`,
      createTemplate([toEmployeeClass(data)])
    );
  })
  .catch((err) => {
    console.log(err);
  });