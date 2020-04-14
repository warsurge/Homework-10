// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// import employee.js

const inquirer = require("inquirer");
const Employee = require("./Employee")

function promptEngineer(){
    return inquirer.prompt({
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    })
}