type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

function createPerson(param1: string, param2: string, param3: string): Person {
  const person: Person = {
    firstName: param1,
    lastName: param2,
    age: parseInt(param3),
  };

  return person;
}

const firstName: string = "Peter";
const lastName: string = "Pan";
const age: string = "20";

const newPerson: Person = createPerson(firstName, lastName, age);
console.log(newPerson);
