export {};

const arr = [1, 2, 3, 4, 5];

const element = arr.splice(0, 1)[0];

arr.splice(3, 0, element as number);

console.log(arr); // 👉️ ['js', 'ts', 'css']
