const myarr = [0,1,5,3,4,5,6];
const myheros = ["iron man" , "spider man"];

const myarr2 = new Array(1,2,3,4,5,6);
console.log(myarr[2]);

//array methods

myarr.push(6)
console.log(myarr);
myarr.pop();
console.log(myarr);
myarr.unshift(10);
console.log(myarr);
myarr.shift();
console.log(myarr);
console.log(myarr.includes(6));
console.log(myarr.indexOf(19));
console.log(myarr);

const newarr = myarr.join()

console.log(newarr);
console.log(typeof newarr);
// slice and aplice

const myn1= myarr.slice(1,3);
console.log(myn1);
console.log("B", myarr);

const myn2 = myarr.splice(1,3);
console.log("c", myarr);
console.log(myn2);