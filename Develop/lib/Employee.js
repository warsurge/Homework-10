// TODO: Write code to define and export the Employee class
// email, id, and specific information based on their role with the company. For instance, an intern may provide their school, 
// whereas an engineer may provide their GitHub username.

class Employee{

constructor(name,id,email){
    this.name=name
    this.id=id
    this.email=email
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

getJob(){
    return "Employee"
}
}
module.exports = Employee