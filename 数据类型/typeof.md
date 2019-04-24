## js 一共有六种基本数据类型（原始数据类型） 一种复杂数据类型（引用数据类型）
- 基本数据类型:Undefined String Number Boolean Symbol Null
- 复杂数据类型:Object 
> js 中变量是没有类型的，在做typeof操作时，得到的结果不是该变量的值，而是该变量持有的值的类型

### typeof 操作符
-  "undefined"—— 如果这个值未定义；
-  "boolean"—— 如果这个值是布尔值；
-  "string"—— 如果这个值是字符串；
-  "number"—— 如果这个值是数值；
-  "object"—— 如果这个值是对象 或复合类型y或 null；
-  "function"—— 如果这个值是函数。
-  "symbol"——如果这个值是new Symbol()得出的

#### 检测一个变量的类型 typeof
```javascript
let foo = null;
// null 在js中是一个假值
console.log(!foo&&typeof foo === 'object'); // true
console.log(foo===null); // true 
console.log(Object.prototype.toString.call(foo)==="[object Null]"); // true
// Object.prototype可用来检测任何类型 返回值为"[object 类型(eg:NULL,Array,Number,String,Undefined,Symbol,Function,Object,Boolean)]"

// 检测函数
function fn(){
  console.log('is function')
}
console.log(typeof fn); // function

// 以声明未赋值 undefined
let a; // let 在同一作用域内不可重复声明
console.log(typeof a); // undefined;

// 检测数值
let b = 12;
console.log(typeof b); // number;

// 检测字符串
let c = "String";
console.log(typeof b);  // string;

// 检测symbol
let d = new Symbol(1);
console.log(typeof d);  // symbol;

// 检测boolean
let flag = true;
console.log(typeof flag); // boolean

```
#### 使用typeof的安全防范机制来检查变量
```javascript
if(DEBUG){  // DEBUG is not defined
  console.log('debugger');
}
if(DEBUG!==undefined){
  console.log("debugger");
}
// 可以使用window.DEBUG来做这种容错，鉴于只有浏览器环境有window，故使用typeof 更为明智
```
> ps: typeof返回值的类型是string -----> typeof typeof s ==="string" //true