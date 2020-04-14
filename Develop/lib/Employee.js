// TODO: Write code to define and export the Employee class
// email, id, and specific information based on their role with the company. For instance, an intern may provide their school, 
// whereas an engineer may provide their GitHub username.

const inquirer = require("inquirer");

class Employee{

promptEmployee(){

return inquirer.prompt([
    {
        type: "checklist",
        name: "title",
        choices: ["Manager", "Engineer", "Intern"]

    },
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name:"id",
        message: "What is your ID number?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    }])

    if (answers.manager = true){
        promptManager()
    } else if{
        answers.engineer = true
        promptEngineer()
    }else{
        promptIntern()
    }
}

}

module.exports = Employee