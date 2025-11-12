const user = {
  id: 2,
  name: { firstName: "Jane", lastName: "Doe" },
  age: 28,
  address: { city: "Los Angeles", zip: "90001" },
};
const {
  id,
  age,
  name: { firstName, lastName },
  address: { city, zip },
} = user;
console.log(id); // 2
console.log(age); // 28
console.log(firstName); // Jane
console.log(lastName);  // Doe      

//array destructuring
const numbers: number[] = [10, 20, 30, 40, 50];
const [first, second, ,, fourth] = numbers;
console.log(first);  // 10
console.log(second); // 20
console.log(fourth); // 40  

//koma dile skip hoye jay
