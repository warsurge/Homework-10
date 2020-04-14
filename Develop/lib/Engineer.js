// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// import employee.js

const Employee = require("./Employee")

class Engineer{

constructor(name,id,email,github){
    this.name=name
    this.id=id
    this.email=email
    this.github=github
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

getGithub(){
    return this.github
}

getJob(){
    return "Engineer"
}
}

module.exports = Engineer


