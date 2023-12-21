const createTodo =async (todo)=>{
    let option ={
        method : "post",
        Headers:{
            "content-type":"application/jason"

        },
        body: JSON.stringify(todo)
    }
    let p = await
    fetch('https://jsonplaceholder.typicode.com/posts',option)
    let response = await p.json()
    return response
    
    }
const getTodo = async (id)=>{
    let response = await fetch('https://jsonplaceholder.typicode.com/posts' + id)
    let r = await response.json()
    return r 
}

const mainfunc = async() => {
    let todo= {
        tittle : 'ayush',
        body : 'rawat',
        userid : 1100,
    }
    let todor = await createTodo(todo)
    console.log(todor)
    console.log(todor)
    console.log(await getTodo(101))

}
mainfunc()
