let users = [
  { name: "Іван", email: "ivan@example.com", age: 22 },
  { name: "Олена", email: "olena@example.com", age: 28 },
  { name: "Максим", email: "max@example.com", age: 30 }
];

for (let { name, email, age } of users) {
  console.log(`Ім'я: ${name}, Email: ${email}, Вік: ${age}`);
}
