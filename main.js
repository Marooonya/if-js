let user = 'John Doe';
console.log(user);

const student = 'Masha';
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

const numb = [2, 3, 5, 8];
console.log(numb);

let sum = 1;

for (let i = 0; i < numb.length; i++) {
  sum *= numb[i];
}
console.log(sum);

console.log('----------');

const numbers = [2, 5, 8, 15, 0, 6, 20, 3];
console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 5 && numbers[i] < 10) {
    console.log(numbers[i]);
  }
}

console.log('----------');

const arr = [2, 5, 8, 15, 0, 6, 20, 3];
console.log(arr);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}

console.log('----------');

const palindrome = (string) => {
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] === string[string.length - i - 1]) {
      return true;
    }
  }
  return false;
};

const word = 'шалаш';

console.log(palindrome(word));

console.log('----------');

const max = (a, b) => (a > b ? a : b);

const a = 4;
const b = 20;

console.log(max(a, b));

const min = (a, b) => (a < b ? a : b);

const x = 87;
const y = 10;

console.log(min(x, y));

console.log('----------');

const array = [71, 10, 19, 3, 7, 50, 27, 38, 100, 45];

const replaceZero = (arr) => arr.join(',').replace(/0/g, 'zero').split(',');

const replaceZero2 = (arr) => {
  const changedArray = [...arr];

  for (let i = 0; i < changedArray.length; i++) {
    if (String(changedArray[i]).includes('0')) {
      changedArray[i] = String(changedArray[i]).replace(/0/g, 'zero');
    }
  }
  return changedArray;
};

console.log(replaceZero2(array));
console.log(replaceZero(array));

console.log('----------');

const sum_2 = a => b => a + b;

console.log(sum_2(2)(5));

console.log('----------');

const differentColours = () => {
  let i = 0;
  return function (event) {
    event.target.style.color = colours[i++];
    if (colours.length === i) {
      i = 0;
    }
  };
};

const colours = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const text_1 = document.getElementById('text1');
const text_2 = document.getElementById('text2');
const text_3 = document.getElementById('text3');

text_1.addEventListener('click', differentColours());
text_2.addEventListener('click', differentColours());
text_3.addEventListener('click', differentColours());
