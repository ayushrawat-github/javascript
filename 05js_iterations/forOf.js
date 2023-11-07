const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num)

}

const greeting = "hello world!"
for (const greet  of greeting) {
    console.log(`each char is ${greet}`)
    
}

//maps

const map = new Map ()
map.set('IN ', 'INDIA')
map.set('USA ', 'UNITED STATES OF AMERICA')
map.set('FR ', 'FRANCE')
map.set('IN ', 'INDIA')

console.log(map);

for (const [key ,val]of map) {
    
    console.log([key,':_' ,val])
}

const myobj = {
    game1 : "cricket",
    game2: "football"
}
