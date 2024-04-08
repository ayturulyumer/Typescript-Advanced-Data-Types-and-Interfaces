"use strict";
function createPerson(param1, param2, param3) {
    const person = {
        firstName: param1,
        lastName: param2,
        age: parseInt(param3),
    };
    return person;
}
const firstName = "Peter";
const lastName = "Pan";
const age = "20";
const newPerson = createPerson(firstName, lastName, age);
console.log(newPerson);
//# sourceMappingURL=personInfo.js.map