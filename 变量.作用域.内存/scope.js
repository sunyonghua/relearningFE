var a = 1;
console.log(a) // function a(){}
function a() {
  console.log(a) // 3
  var a = 3;
}

a = 2;
console.log(a) // function a(){}
a();

