const marvel_heros = ["thor","ironman","spiderman"]
const dc_heroes = ["batman", "flash","superman"];

//marvel_heros.push(dc_heroes);

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

//const all_heroes =marvel_heros.concat(dc_heroes);
//console.log(all_heroes);

const allnewheros = [...marvel_heros,...dc_heroes];
console.log(allnewheros);

const anotherarry = [1,2,3,[4,5,6,],7,[6,7,[4,5]]];
const realanotherarray = anotherarry.flat(Infinity);
console.log(realanotherarray);
console.log(Array.isArray("ayush"));
console.log(Array.from("ayush"));
console.log(Array.from({name:"ayush"})); //intersting

let score1 =100;
let score2 =200;
let score3 =300;

console.log(Array.of(score1,score2,score3));




