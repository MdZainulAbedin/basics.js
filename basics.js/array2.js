var scores = [12,13,14,16]
var evenScores =[]
for(let i =0;i<scores.length;i++)
{
    if(scores[i] %2 == 0)
{
    evenScores.push(scores[i])
}
}
console.log(evenScores)

let newFilterEvenScores =scores.filter(score=>score%2==0)
console.log(newFilterEvenScores)

//map

let mappedArray=newFilterEvenScores.map(score=>score*3)
console.log(mappedArray)
let totalVal=mappedArray.reduce((sum,val)=>sum+val,0)
console.log(totalVal)

var scores1 = [12,13,14,16]

let sumValue=scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0)
console.log(sumvalue)


