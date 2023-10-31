const name = " ayush";
const repocount = 50 ;
console.log(`hello my name is ${name} and my count is ${repocount}`);
const gamename = new String('ayush');
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename); 
console.log(gamename.indexOf('y'));

const newstring = gamename.substring(0,4);
console.log(newstring);

const anotherString = gamename.slice(-4,4);
console.log(anotherString);
const newstring1 = "   ayush  ";
console.log(newstring1);
console.log(newstring1.trim());
const url ="https://ayush.com/ayush%20rawat"

console.log(url.replace('%20','_'));
console.log(url.includes('ayush'));
console.log(url.includes('haha'));
console.log(url.split('/'));



