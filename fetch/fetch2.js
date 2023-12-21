let p = fetch("https://goweather.herokuapp.com/weather/Ny")
p.then((Response)=>{
    console.log(Response.status)
    console.log(Response.ok)
    console.log+(Response.headers)
    return Response.json()

}).then((value2)=>{
    console.log(value2)
})

let a = fetch("https://goweather.herokuapp.com/weather/Ny")
a.then((Response)=>{
    return Response.json()

}).then((Response)=>{
    console.log(Response)
})