const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');
const teamMembers = [];


function createManager(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the Manager's name. (Required)",
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log("You need to enter the Manager's name");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'id',
            message: "Enter the Manager's ID number. (Required)",
            validate: idInput => {
              if (idInput) {
                return true;
              } else {
                console.log("You need to enter the Manager's ID number");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: "Enter the Manager's email address. (Required)",
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log("You need to enter the Manager's email address");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the Manager's office number",
            validate: officeInput => {
              if (officeInput) {
                return true;
              } else {
                console.log("You need to enter the Manager's office number");
                return false;
              }
            }
          },
    ]).then(managerData => {
        let newManager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);  
        teamMembers.push(newManager);
    })
}

function createIntern(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the Intern's name. (Required)",
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log("You need to enter the Intern's name");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'id',
            message: "Enter the Intern's ID number. (Required)",
            validate: idInput => {
              if (idInput) {
                return true;
              } else {
                console.log("You need to enter the Intern's ID number");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: "Enter the Intern's email address. (Required)",
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log("You need to enter the Intern's email address");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'school',
            message: "Please enter the name of the Intern's school",
            validate: schoolInput => {
              if (schoolInput) {
                return true;
              } else {
                console.log("You need to enter the name of the Intern's school");
                return false;
              }
            }
          },
        ]).then(internData => {
            let newIntern = new Intern(internData.name, internData.id, internData.email, internData.school);  
            teamMembers.push(newIntern);
        })
    }

function createEngineer(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the Engineer's name. (Required)",
            validate: nameInput => {
                if (nameInput) {
                return true;
                } else {
                console.log("You need to enter the Engineer's name");
                return false;
                }
            }
            },
            {
            type: 'input',
            name: 'id',
            message: "Enter the Engineer's ID number. (Required)",
            validate: idInput => {
                if (idInput) {
                return true;
                } else {
                console.log("You need to enter the Engineer's ID number");
                return false;
                }
            }
            },
            {
            type: 'input',
            name: 'email',
            message: "Enter the Engineer's email address. (Required)",
            validate: emailInput => {
                if (emailInput) {
                return true;
                } else {
                console.log("You need to enter the Engineer's email address");
                return false;
                }
            }
            },
            {
            type: 'input',
            name: 'github',
            message: "Please enter the Engineer's Github username",
            validate: githubInput => {
                if (githubInput) {
                return true;
                } else {
                console.log("You need to enter the the Engineer's Github username");
                return false;
                }
            }
            },
        ]).then(engineerData => {
            let newEngineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);  
            teamMembers.push(newEngineer);
            console.log(teamMembers);
        })
    }
