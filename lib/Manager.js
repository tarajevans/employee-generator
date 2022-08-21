const inquirer = require("inquirer");
const Employee = require('../lib/Employee.js');

let officeNumber;

class Manager extends Employee{
    
    constructor(nameIn, idIn, emailIn, officeIn){
        super(nameIn, idIn, emailIn);
        this.officeNumber = officeIn;
    }
           
    getOfficeNumber(){
        return this.officeNumber;
    }
    
    getRole(){
        return "Manager";
    }


    
}

module.exports = Manager;