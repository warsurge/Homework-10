const inquirer = require("inquirer");
const Employee = require("./Employee")

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
function promptManager(){
    return inquirer.prompt(
    {
        type: "input",
        name: "office",
        message: "What is your office number?"
    })
}