//tarnary,nullish coalescing operator, optional chaining

const marrideStatus=(age:number)=>{

    // if(age>=18){
    //    console.log("You are eligible for marriage");
    // }
    // else{
    //    console.log("You are not eligible for marriage");
    // }
    const status=age>=18?"You are eligible for marriage":"You are not eligible for marriage";
    console.log(status);
}
marrideStatus(20);
marrideStatus(16);
//nullish coalescing operator:when we want to provide a default value for null or undefined
const usertheme=null;
const usertheme2="dark mode";
const theme=usertheme??"light mode";
const theme2=usertheme2??"light mode";
console.log(theme2); //dark mode
console.log(theme); //light mode