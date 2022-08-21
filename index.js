const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
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
            message: "Enter the Manager's id number. (Required)",
            validate: idInput => {
              if (idInput) {
                return true;
              } else {
                console.log("You need to enter the manager's id number");
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