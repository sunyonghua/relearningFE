/**
 * @desc: 字符串 string 模板字面量 字符串字面量
 * @desc: 字符串（一串文本）。字符串的值必须将用引号（单双均可，必须成对）扩起来。
 */

// @desc: string 方法
const str = 'string你好';
const str1 = '我不好';
console.log(str.length) // 6 string 长度
console.log(str.charAt(1)) // 用下标获取字符串中的字符 
console.log(str.charCodeAt(6)) // 用下标获取字符串中字符的Unicode的值。
console.log(str.toString()) // toString()方法返回string的原始字符串值
console.log('valueOf:', str.valueOf()) // toString()方法返回string的原始字符串值
console.log('toLocaleString:', str.toLocaleString()) // toString()方法返回string的原始字符串值
console.log('concat:', str.concat(str1)) // concat 连接两个字符串
console.log(str + str1) // + 连接两个字符串
const str2 = '你好你好你好'
console.log('indexOf:', str2.indexOf('你')) // 0  indexOf 找到第一次出现的位置
console.log('lastIndexOf:', str2.lastIndexOf('你')) // 0  lastIndexOf 找到最后一次出现的位置
console.log('lastIndexOf:', str2.lastIndexOf('as')) // 找不到为-1 indexOf同理
console.log('includes:', str2.includes(str1))  // 查找str2中是否包含str1 返回布尔值
console.log('slice:', str2.slice(1, 2)) // 截取 下标1-2字符
console.log('slice:', str2.slice(-3)) // 截取 str.length-3-结束位置字符