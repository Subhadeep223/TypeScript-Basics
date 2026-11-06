"use strict";
let score = 33;
score = 44;
score = "44";
let subhadeep = { name: "hitesh", id: 334 };
subhadeep = { Username: "hc", id: 337 };
function getDbId(id) {
    //making api calls
    console.log(`DB id is :${id}`);
}
getDbId(3);
getDbId("3");
function getDbIde(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
