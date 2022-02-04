const employee = {
    name:'Sam',
    streetAddress:'11 Broadway',
};

function updateEmployeeWithKeyAndValue (employee, key, value) {
    
    return Object.assign({}, employee, {[key]:value})
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
       employee[key] = value
       return employee;

}

function deleteFromEmployeeByKey(employee, key) {
    employee = {...employee};
    employee[key];
    delete employee.key;
    return employee;

}
const newEmployee = {...employee};
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    employee[key];
    delete employee.key;
    return employee
}