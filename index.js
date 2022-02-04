// Write your solution in this file!

const employee = {
    name: 'Tim',
    streetAddress: '123 Broadway',
}


// we're using spread operator here. Copying all the elements of an existing arry into a new array.
// Creating a clone of the original object and save it into a new variable. 
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = {...employee}
    newObj[key] = value;
    return newObj
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}


function deleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign({}, employee)
    console.log('line25:', employee, key);
    delete newObject[key];
    console.log('line27:', employee, key);
    return newObject;
    console.log('line:', employee, key)
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee;
}