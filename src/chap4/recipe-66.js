const array = [1, 2, 3, 4, 5];

const arrayLength = array.length;

for (let i = arrayLength - 1; i >= 0; i--) {
  const randomIndex = Math.floor(Math.random() * (i + 1));
  [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
}

console.log(array);
