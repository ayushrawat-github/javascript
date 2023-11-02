//singleton

//object litrals
const mySym = Symbol("key1")
const jsuser ={
    name : "ayush",
    age : 20,
    [mySym]: "mykey1",
    location : "dehradun",
    email : "rawatayush1718@gmail.com",
    isloggedin : false ,
    lastloggedindays : ["monday","saturday"]
}
console.log(jsuser.email)
console.log(jsuser["email"])
jsuser.name = "ayush rawat"
console.log(jsuser.name)
console.log(jsuser[mySym])
//Object.freeze(jsuser)
jsuser.name= "ayush singh rawat"
console.log(jsuser)

jsuser.greeting = function(){
    console.log("Hello JS user");
}
jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());