let tUser : [string, number, boolean] //specialized array with some restrictions on it. this is called tuples

tUser =["hc",131, true];

let rgb: [number,number, number]=[255,133,122];

type User= [number, string];

const newUser:User=[112, "example@gmail.com"];

//problems with tuples.

newUser[1]="hc.com";
export {}