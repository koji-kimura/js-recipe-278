// const today = new Date();

// console.log(today instanceof Date);
// console.log(today instanceof Array);

function showCurrentDate(argument) {
  if (argument instanceof Date) {
    console.log(`現在は${argument.toLocaleDateString()}です`);
  } else {
    console.log("不正なデータです");
  }
}

const today = new Date();
const myArray = [1, 2, 3];

showCurrentDate(today);
showCurrentDate(myArray);
