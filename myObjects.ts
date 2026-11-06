const User={
    name:"subh",
    email:"subh@gmail.com",
    isActive:true
}


//most common pattern for objects are passing objects into methods by param destructuring...
function createUser({name, isPaid}: {name:string, isPaid:boolean}){ //first destructing paramters and then defining the types.
}
createUser({name:"papai", isPaid:false}); //calling the function and passing the object parameters.


// cleaner method

type Users={// type is way to define the shape,type of the data a variable,object,or function paramter can have.
    name: string;
    age: number;
} // and this Users can be used in any function,object and anywhere.

function createNewUser({name, age}: Users): Users{
 //here we are giving the type safety of the paramter as well as the return by declaring the type Users variable...
 return {name:"", age:22};
}

createNewUser({name:"papai", age:22});

// for objects...
const user2:Users={
    name:"Hello",
    age:58
}

//function returning an object...

function createCourse({name,price} :{name:string, price:string}):{name:string, price:number}{
    return {name:"TypeScript", price: 450};
}
/*
function nameOfTheFunction(parameters:type of the paramters):{type of the return}{
return { }
}

*/ 

type Data={
    readonly _id:string, //with readonly command we can only read the _id, we cannot edit it..
    name:string,
    email:string,
    isActive:boolean,
    creditCardDetails?: number //this is optional, user may not give any value to the user..
}

let myUser: Data={// myUser is of type Data..
    _id:"1245",
    name:"Subhadeep Chakraborty",
    email:"h@h.com",
    isActive:false
}

type cardNumber={
    cardNumber:string
}

type cardDate={
    cardDate:string
}

type cardDetails =cardNumber & cardDate & {
    cvv: number
}

export {}