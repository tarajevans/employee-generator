let name;
let id;
let email;

class Employee {
  constructor(nameIn, idIn, emailIn){
    this.name = nameIn;
    this.id = idIn;
    this.email = emailIn;
  }

  getName() {
      return this.name;
  }
  
  getId(){
      return this.id;
  }
  
  getEmail(){
      return this.email;
  }
  
  getRole(){
      return "Employee";
  } 

}



module.exports = Employee;