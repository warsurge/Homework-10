const inquirer = require("inquirer");
const Employee = require("./Employee")

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern{

constructor(name,id,email,school){
    this.name=name
    this.id= id
    this.email = email
    this.school = school
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

getSchool(){
    return this.school
}

getJob(){
    return "Intern"
}


}

module.exports = Intern