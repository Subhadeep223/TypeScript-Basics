let score: number | string =33

score=44;
score= "44";

type yuser={
    name:string,
    id:number
}

type Admin={
    Username:string,
    id:number
}

let subhadeep: yuser| Admin ={name:"hitesh", id:334};

subhadeep={Username:"hc", id:337};

function getDbId(id:number | string){
    //making api calls
    console.log(`DB id is :${id}`);
}

getDbId(3);
getDbId("3");

function getDbIde(id: number | string){
    if(typeof id === "string"){ //this is called union narrowing
        id.toLowerCase();

    }
}

//array

const data: number[]=[1,2,3];
const data2: number[] | string[]=[1,2,3]; // it will have either number or either string
const data3: (string | number | boolean)[] =["1","2",3, true]; // now with this we can include the given types in the array.
const data4: any[]=["1","2",3, true]; // it can also be used, but we are making our type strong..

let pi:3.14=3.14 // literal type assignment.

let seatAllotment: "aisle" | "middle" | "window"; //literal type assignent.
