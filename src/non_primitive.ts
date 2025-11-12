//array,object.tuple

//array

const name = ["rifat", "siam", "nazmul"];
// name.push(5)/only string
const arr = ["rifat", 3, true, null];
// arr.push(undefined) not allowed

const array: (string | number)[] = [2, 5, "tg", 8, "y"];
//tuple
let user: [number, string] = [1, "riat"];
user.push(5);
user.push(5);

console.log(user);
let couple: [string, string] = ["rifat", "she"];
// couple=[true,'she'] not allowed

//object

let person: {
  readonly firstName: string; //readonly not allowed to change//access modifier
  //   secondName: string;
  secondName: "rifat";
  age?: number; //optional property
} = { firstName: "muhammad", secondName: "rifat", age: 22 };
// person.age = 'rifat'; not allowed
// person.secondName = "rifats"; not allowed
// person.firstName = "rifat";not allowed

console.log(person);
