let p1 =new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("value1")
    }, 3000);
});

let p2 = new Promise((resolve , reject)=> {
    setTimeout(() => {
        resolve("value 2")
    }, 1000);
})

let p3 = new Promise((resolve , reject) =>{
    setTimeout(() => {
        resolve("value 3");
    }, 3000);
});

//  p1.then( function(value){
//     console.log(value);
//  })

//  p2.then((value)=>{
//      console.log(value);
//  })
//  p3.then((value) =>{
//      console.log(value);
//  })

//  let promise_all = Promise.all([p1,p2,p3])
//  promise_all.then((value)=>{
//      console.log(value);
//  })
// let promise_all2 = Promise.allSettled([p1,p2,p3])
// promise_all2.then((value)=>{
//     console.log(value)
// })


 let promise_all4= Promise.resolve(6)
 promise_all4.then((value)=>{
     console.log(value);
 })
let promise_all6 = Promise.race([p1,p2,p3])
promise_all6.then((value)=>{
    console.log(value);
})
let promise_all7 = Promise.any([p1,p2,p3])
promise_all7.then((value)=>{
    console.log(value);
})

let promise_all5 = Promise.reject(new Error("hey this is error"))
promise_all5.then((value)=>{
    console.log(value);
})