function addTwo(num:number):  number{ //after giving type safety to the parameter we are also giving type safety to the the return
    return num+2;
}
addTwo(5);

function getUpper(val:string){
    return val.toUpperCase();
}
getUpper("mickey");

function signUpUser(name:string, email:string, isPaid:boolean){
    return `UserSignUp: ${name}, ${email}, ${isPaid}`;
}
signUpUser("Rajan","hhwe@gmail.com",true);

let loginUser=(name:string, email:string,isPaid:boolean=false)=>{
    return ` ${name}, ${email}, ${isPaid}`; //providing  default values
}
loginUser("Subh","wjhs@gmail.com");


function getValue(myVal:number){
    if(myVal>5){
        return true;
    }
    return "200 0k"
}

const getHello=(s:string):string =>{ //type safety of the paramters as well as giving type safety to the return.
    return ""
}

//using map array method!!!

const heroes=["thor","spiderman","ironman"];

heroes.map((hero:string): string =>{ //here we are defining the retrun of as string. and also defining the parameter which is not required!!!
    return `hero is ${hero}`;
})

//defining void and null as the return type of the function.

function consoleError(errmsg:string):void{ //void will not retun anything we are explicitly mentioning that it will not return anything
    console.log(errmsg);
}

function handleError(errmsg:string):never{
    throw new Error(errmsg);//never will also not return anything but it will return only an error it is used for error handling.
}

export {}