async function ayush(){
    let delhiweather = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("25 deg")
        }, 2000);
    })

    let bangloreweather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("30")
        }, 4000);
    })

    console.log("fetching delhi weather please wait...")
    let delhiw = await delhiweather
    console.log("fetched delhi weather :" + delhiw)
    console.log("fetching banglore weather please wait...")
    let banglorew = await bangloreweather
    console.log("fetched banglore weather : " + banglorew);
    return [delhiw,banglorew]
}

console.log("welcome to weathe tcontrol system");
let a = ayush()
console.log(a);