let car1 = {
  brand: "Toyota",
  model: "Corolla",
  year: 2018
};

let car2 = {
  brand: "Honda",
  model: "Civic",
  owner: "Іван Петренко"
};

let car3 = {
  car1: { ...car1 },
  car2: { ...car2 }
};

console.log(car3);