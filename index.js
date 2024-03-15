// Write your solution in this file!
const employee={
  name: "Sam",
  streetAddress: "11 Broadway",
}

function updateEmployeeWithKeyAndValue(){
const newEmployee={...employee};
newEmployee["streetAddress"]="11 Broadway"
return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(){
employee.streetAddress="12 Broadway"
return employee
}

function deleteFromEmployeeByKey(){
const newEmployee={...employee}
delete newEmployee.name
return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(){
    delete employee.name
    delete employee.homeAddress
    return employee
}




