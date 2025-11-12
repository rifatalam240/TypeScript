type User = {
  name: string;
  age: number;
  location: string;
};

const user: User = { name: "Alice", age: 30, location: "Wonderland" };
const user2: User = { name: "Bob", age: 25, location: "Builderland" };

// const user: {
//   name: string;
//   age: number;
//   location: string;
// } = { name: "Alice", age: 30, location: "Wonderland" };
// const user2: {
//   name: string;
//   age: number;
//   location: string;
// } = { name: "Bob", age: 25, location: "Builderland" };

//function parameter e type alias use kora hoyeche
type Funtype = (a: number, b: number) => number;
const add: Funtype = (a, b) => a + b;
