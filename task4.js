let person = {
  firstName: "Олег",
  lastName: "Коваленко",
  age: 25
};

person.email = "oleg.kovalenko@example.com";
delete person.age;

console.log(person);
