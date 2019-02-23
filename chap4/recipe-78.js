let a = [1, 2, 3, 4];
let b = a;
a[0] = 100;
console.log(b);

function myFunction(x) {
  x = x + 2;
}

// 変数aに10を代入
let c = 10;

//myFunction()にaを渡す
myFunction(c);

console.log(c);
