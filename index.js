// Write your solution in this file!
const employee = {
    name : "Ahmed",
    streetAddress : "Zaniary",
};


function updateEmployeeWithKeyAndValue(employee, name, kutay) {
    const newEmployee = { ...employee };
  
    newEmployee[name] = kutay;
  
    return newEmployee;
  }

function destructivelyUpdateEmployeeWithKeyAndValue(){
  employee.streetAddress = "12 Broadway";
return employee;
}

 
    function deleteFromEmployeeByKey(){
        const newEmployee = {...employee}
        delete newEmployee.name;
        return newEmployee;
    }

    function destructivelyDeleteFromEmployeeByKey(){
    delete employee.name;
    return employee; 
    }