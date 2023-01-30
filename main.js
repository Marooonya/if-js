let user = 'John Doe';
console.log(user);

let student = 'Masha';
console.log(student);

user = student;
console.log(user);

console.log('----------');

let test = 1;
test++;
test += test;
console.log(test);

test = false;
test = !test;
console.log(test);
console.log(typeof test);

console.log('----------');

let numb = [2, 3, 5, 8];
console.log(numb);

let sum = 1;

for (let i = 0; i < numb.length; i++) {
  sum *= numb[i];
}
console.log(sum);

console.log('----------');

let numbers = [2, 5, 8, 15, 0, 6, 20, 3];
console.log(numbers);

for (let i = 0; i < 8; i++) {
  if (numbers[i] > 5 && numbers[i] < 10) {
    console.log(numbers[i]);
  }
}

console.log('----------');

let arr = [2, 5, 8, 15, 0, 6, 20, 3];
console.log(arr);

for (let i = 0; i < 8; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}

console.log('----------');

const palindrome = (string) => {
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] === string[string.length - i - 1]) return true;
  }
  return false;
};

const word = 'шалаш';

console.log(word);
console.log(palindrome(word));

console.log('----------');

const max = (firstNumber, secondNumber) =>
  firstNumber > secondNumber ? firstNumber : secondNumber;

const a = 4;
const b = 20;

console.log(a, b);
console.log(max(a, b));

const min = (firstNumber, secondNumber) =>
  firstNumber < secondNumber ? firstNumber : secondNumber;

const x = 87;
const y = 10;

console.log(x, y);
console.log(min(x, y));

console.log('----------');

const replaceZero = (arr = []) => {
  console.log(arr.join(',').replaceAll('0', 'zero').split(','));
};

const mas = [71, 10, 19, 3, 7, 50, 27, 38, 100, 45];

console.log(mas);
replaceZero(mas);
