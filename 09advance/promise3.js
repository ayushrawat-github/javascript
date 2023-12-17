let p1 = new  Promise((resolve , reject)=>{
    console.log("iam resolved")
    setTimeout(()=>{
        
        resolve(1)
    },2000)

})

p1.then(()=>{
    console.log("this promise is now resolved")
})
p1.then(()=>{
    console.log("ayush");
    new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(4)
        }, 6000)
    }).then((value) => {console.log(value)})
})
