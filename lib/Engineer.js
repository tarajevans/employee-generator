const Employee = require('../lib/Employee.js');

let github;

class Engineer extends Employee {
    constructor(nameIn, idIn, emailIn, githubIn){
        super(nameIn, idIn, emailIn);
        this.github = githubIn;
    }

    getGithub(){
        return this.github;
    }
    
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;