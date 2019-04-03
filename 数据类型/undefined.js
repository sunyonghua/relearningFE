// console.log(a) // a is not defined
var a
console.log(a) //undefined 
console.log(typeof a) //undefined 
// a.valueOf()
// a.toString()

console.log(undefined === null) // false
console.log(undefined == null) // true
console.log(Number(undefined)) // NaN
console.log(parseInt(undefined)) // NaN
console.log(String(undefined)) // undefined 
console.log(typeof String(undefined)) // string 
console.log(String(undefined).valueOf()) // string 
console.log(String(undefined).toString()) // string 
console.log(Boolean(undefined)) // false 
