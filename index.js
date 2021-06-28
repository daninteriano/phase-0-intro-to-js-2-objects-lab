// Write your solution in this file!
const employee = {
    name: 'Daniel', 
    streetAddress: '26 Thompson St'
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    let newBitch = {...employee};
    newBitch[key] = value;
    return newBitch;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    let newBitch = {...employee}
    delete newBitch[key]
    return newBitch;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee;
}