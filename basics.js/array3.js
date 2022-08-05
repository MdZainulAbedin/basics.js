let fruits = ["Banana","mango","pomegrate","apple"]

fruits.sort()
console.log(fruits)

console.log(fruits.sort())
console.log(fruits.reverse())

var scores1 =[12.003,19,16,14] //9
// console.log(scores1.sort())
// scores1.sort(function(a,b){
//     return a-b
// })

console.log(scores1.sort((a,b)=> b-a))