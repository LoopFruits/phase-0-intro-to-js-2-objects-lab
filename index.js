// Write your solution in this file!

const employee = {
    name: 'Tim',
    streetAddress: '123 Broadway',
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = {...employee}
    newObj[key] = value;
    return newObj
}