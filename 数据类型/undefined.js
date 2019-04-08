// undefined表示变量声明但未初始化时的值，
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
console.log(undefined == 0) // undefined 不等于 0 
// 实际上，undefined值是派生自null值的，ECMAScript标准规定对二者进行相等性测试要返回true，即 null==undefined true