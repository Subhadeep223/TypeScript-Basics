let greetings: string = "Hello Subhadeep!!!";

console.log(greetings);

//number

let userId: number=334;
// let userId=334 v typeScript is smart enough top infer whether is will store a number or not

//boolean
let isLoggedIn: boolean=false;


//any
let hero: string; //whenever we dont know what type this variable will infered then we should always specify the type.
//specify the types.
function getHero(){
    return "thor";
}
hero=getHero();

export {}