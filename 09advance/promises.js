const promiseone = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log('async task is completed');
        resolve()
    }, 1000)

})

promiseone.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
        
    }, 1000);
}).then(function(){
    console.log("async 2 resolved");
})

const promisethree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username : "chai" , email :"ayush@example.com"})
        
    }, 1000);
})

promisethree.then(function(user){
    console.log(user);
})

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username : "ayush", password : "123"})
        } else{
            reject('ERROR  : somethind went wrong')
        }
    },1000)
})

promisefour.then((user) => {
    console.log(user);
    return user.username
 }).then((username)=>{
       console.log(username);
 }).catch(function(error){
     console.log(error);
 }).finally(()=> console.log("the promise is either resolver or rejected"))

 
 const promisefive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username : "javascript"  , password : "123"})
        } else{
            reject('ERROR : js went wrong')
        }
    },1000)

 });

 async function consumedpromisefive(){
    try{
        const response = await promisefive
        console.log(response);
    }catch(error){
        console.log(error);
    }
 }
 consumedpromisefive()


//  async function getAllUsers(){
//     try{
//         const response = await fetch ('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error){
//         console.log("E :" , error);
//     }
//  }
//  getAllUsers();

 fetch('https://api.github.com/users/ayushrawat')
 .then((response)=> {
    return response.json()
 })
 .then((data)=>{
    console.log(data);
 })
 .catch((error)=>console.log(error))
