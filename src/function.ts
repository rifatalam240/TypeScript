//normal function,,arrow function
//normal function
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 10));

//arrow
const sum = (a: number, b: number): number => {
  return a + b;
};
const pooruser = {
  name: "rifat",
  balance: 5,
  add(value: number) {
    const total: number = this.balance + value;
    return total;
  },
};
console.log(pooruser.add(5));

const arr: number[] = [1, 2, 3, 4, 5];
const arr1=arr.map((item: number): number => {
  return item * item;
});
console.log(arr,arr1);
