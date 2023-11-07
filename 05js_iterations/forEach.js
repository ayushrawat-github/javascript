const coding = ["js","ruby","java","python","cpp"]
coding.forEach(function (val){
    console.log(val);
})

coding.forEach((item) => {
    console.log(item);
})

function printme(item){
    console.log(item);
}

coding.forEach(printme)

coding.forEach((item,index , arr)=>{
    console.log(item,index,arr);
})

const mycodig = [

    {
        languagename : "javascript",
        languagefilename : "js"
    },
    {
        languagename : "java",
        languagefilename : "java"
    },

    {
        languagename : "python",
        languagefilename : "py"

    }
]

mycodig.forEach((item)=> {
    console.log(item.languagename)
})