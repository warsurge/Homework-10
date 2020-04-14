const inquirer = require("inquirer");
const Employee = require("./Employee")

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager{

constructor(name,id,email,office){
this.name= name
this.id = id
this.email= email
this.office= office
}

getName(){
    return this.name
}

getID(){
    return this.id
}

getEMAIL(){
    return this.email
}

getOffice(){
    return this.office
}

getJob(){
    return "Manager"
}
}

module.exports = Manager