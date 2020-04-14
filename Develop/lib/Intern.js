const inquirer = require("inquirer");
const Employee = require("./Employee")

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
function promptIntern(){
    return inquirer.prompt(
        {
            type: "input",
            name: "school",
            message: "Where did you graduate from?"
        })
}
