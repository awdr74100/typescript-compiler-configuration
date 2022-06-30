"use strict";
const users = [
    { name: "Ian", age: 23 },
    { name: "Owen", age: 24 },
];
const user = users.sort((a, b) => b.age - a.age)[0];
console.log(user);
const delay = new Promise((resolve) => setTimeout(resolve, 2000));
