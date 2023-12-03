const person = {
  name: "uttam",
  age: 25,
};
person.name = "sita";
const addNewProperties = () => {
  return [...person, age, person.age + 25];
};
console.log(person);
