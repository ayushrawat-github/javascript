const myNums = [1, 2, 3]

//  const mytotal = myNums.reduce(function(acc,currval){
//     console.log(`acc : ${acc}and currval : ${currval}`);
//     return acc + currval
// }, 0)

const mytotal = myNums.reduce((acc, curr)=> acc +curr ,0)
 console.log(mytotal);


 const shoppingcart = [{
    itemname : "js course",
    price : 2999

},
{
    itemname : "py course",
    price : 1999

},
{
    itemname : "mobile dev course",
    price : 5999

},
{
    itemname : "data science course",
    price : 15999

}

]
const pricetopay = shoppingcart.reduce((acc, item)=> acc + item.price ,0 )
console.log(pricetopay);
