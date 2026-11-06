const User = {
    name: "subh",
    email: "subh@gmail.com",
    isActive: true
};
//most common pattern for objects are passing objects into methods by param destructuring...
function createUser({ name, isPaid }) {
}
createUser({ name: "papai", isPaid: false }); //calling the function and passing the object parameters.
export {};
