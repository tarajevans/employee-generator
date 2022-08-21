const Employee = require('../lib/Employee.js');

let school;

class Intern extends Employee{

    constructor(nameIn, idIn, emailIn, schoolIn){
        super(nameIn, idIn, emailIn, schoolIn);
        this.school = schoolIn;
    }
    
    getSchool(){
        return this.school;
    }
    
    getRole(){
        return "Intern";
    }

}

module.exports = Intern;