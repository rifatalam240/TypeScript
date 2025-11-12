//nullable
const userinput=(input:string|null)=>{
    if(input){
        console.log("User input is:",input);
    }   
    else{
        console.log("No input provided");
    }
}
userinput("Hello World");
userinput(null);

//unknown
const processValue=(value:unknown)=>{

    if(typeof value==="string"){
        console.log("String value:",value.toUpperCase());
    }   

    else if(typeof value==="number"){
        console.log("Number value:",value*2);
    }
    else{
        console.log("Unsupported type");
    }
}
processValue("hello");
processValue(42);
processValue(true);
//never
const throwError=(message:string):never=>{
    throw new Error(message);
}       
throwError("This is a critical error!");