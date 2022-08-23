const inquirer = require('inquirer');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Page = require('./src/page-template.js');
const { writeFile, copyFile } = require('./util/generate-page');
const { default: Choices } = require('inquirer/lib/objects/choices.js');
const teamMembers = [];
let notDone = true;

function showMenu(){
  
    return inquirer.prompt([
      {
        type: "list",
        name: "choice",
        message: "Choose one of the following",
        choices: ["Create Intern", "Create Engineer", "Complete Team"],
      },
    ]).then((choice) => {
      console.log (choice.choice);
      
        switch (choice.choice){
          case "Create Intern":
            createIntern();
            break;
          case "Create Engineer":
            createEngineer();
            break;
          case "Complete Team":
            //TODO - create HTML and exit
            writeFile(Page(teamMembers));
            copyFile();
            break;

        }    
    });  
 
}

function createManager(){
    return inquirer.prompt([
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
                console.log("You need to enter the Manbager's office number");
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
    return inquirer.prompt([
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
            message: "Enter the Intern's Id number. (Required)",
            validate: idInput => {
              if (idInput) {
                return true;
              } else {
                console.log("You need to enter the Intern's Id number");
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
            message: "Please enter the name of the intern's school",
            validate: officeInput => {
              if (officeInput) {
                return true;
              } else {
                console.log("You need to enter the intern's school's name");
                return false;
              }
            }
          },
    ]).then(InternData => {
        let newIntern = new Intern(InternData.name, InternData.id, InternData.email, InternData.school);  
        teamMembers.push(newIntern);
        showMenu();
    })
}

function createEngineer(){
    return inquirer.prompt([
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
            message: "Enter the Engineer's Id number. (Required)",
            validate: idInput => {
              if (idInput) {
                return true;
              } else {
                console.log("You need to enter the Engineer's Id number");
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
            message: "Please enter the github username",
            validate: officeInput => {
              if (officeInput) {
                return true;
              } else {
                console.log("You need to enter the github username");
                return false;
              }
            }
          },
    ]).then(engineerData => {
        let newEngineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);  
        teamMembers.push(newEngineer);
        showMenu();
    })
}

createManager().then(showMenu);
