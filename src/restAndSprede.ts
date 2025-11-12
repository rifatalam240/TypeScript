const names = ["rifat", "siam", "nazmul"];
const newname = ["shimon", "sharif", "Afif", "imran"];
const ladyname = ["tania", "sadia", "sheuly"];
ladyname.push(...names, ...newname);
console.log("all in one", ladyname);
//object spread
const person = {
  name: "rifat",
    age: 22,
    address: "dhaka",
};
const newPerson = {
  ...person,
    profession: "student",
    country: "bangladesh",
};
console.log("new person", newPerson);


// rest

