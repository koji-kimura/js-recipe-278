const array1 = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10];
const shuffled = shuffledArray(array1);
console.log(shuffled);

const array2 = ["田中", "鈴木", "吉田", "辻"];
const shuffled2 = shuffledArray(array2);
console.log(shuffled2);
function shuffledArray(sourceArr) {
  const array = sourceArr.concat();

  const arrayLength = array.length;
  for (let i = arrayLength - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }

  return array;
}
