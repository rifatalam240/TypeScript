//union
type userRole = "admin" | "user" | "guest";
const getUserRole = (role: userRole) => {


if (role === "admin") {
    return "You have full access.";
  } else if (role === "user") {
    return "You have limited access.";
  } else {
    return "You have guest access.";
  }     
};
console.log(getUserRole("admin")); // You have full access
console.log(getUserRole("guest")); // You have guest access
//intersection
type Person = {
  name: string; 
    age: number;
};

type Employee = {
  employeeId: number;
  department: string;
};      
type Staff = Person & Employee;

const staffMember: Staff = {
    name: "John Doe",
    age: 35,
    employeeId: 1234,
    department: "Engineering",
};      
console.log(staffMember.name); // John Doe
console.log(staffMember.employeeId); // 1234    