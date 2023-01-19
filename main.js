let user = 'John Doe';
console.log(user);

let student = 'Masha';
console.log(student);

user = student; //переопределение переменной
console.log(user);

console.log('----------');

let test = 1;
test++; //к переменной прибавили 1, теперь ее значение - 2
test += test; //к переменной, значение которой уже 2, прибавляем значение test (=2)
console.log(test); //в итоге получаем 2+2=4

test = false; //булевое значение
test = !test; //операция "переворачивает" булевое значение
console.log(test); //выводит true, т.к. поменяли с false на true с пом. !
console.log(typeof test); //выводит тип переменной (является булевой, т.к. имеет первонач. значение false)

console.log('----------');

let numb = [2, 3, 5, 8];
console.log(numb);

let sum = 1;

for (let i = 0; i < 4; i++) {
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

const palindrome = function (string) {//обозначаем функцию
  for (let i = 0; i < string.length / 2; i++) {//"пробегаем" буквы до середины, т.к. сравниваем первую половину с зеркально отраженной правой
    if (string[i] === string[string.length - i - 1]) {//1-ый эл. с индексом 0 (например, ш) сравниваем с последним(длина "шалаш" - 5, отнимаем i, чтобы приблизиться к середине слова, и 1, т.к. индекс последнего элемента на 1 меньше длины всего слова)
      return true; //вывод
    }
    {
      return false;
    }
  }
};

const word_1 = 'шалаш';
const word_2 = 'дома';
const word_3 = 'дом мод';

console.log(word_1);
console.log(palindrome(word_1));

console.log(word_2);
console.log(palindrome(word_2));

console.log(word_3);
console.log(palindrome(word_3));

console.log('----------');

const max = function (n_1, n_2) {//обозначаем функцию
  if (n_1 > n_2) {
    return n_1;//вывод
  }
  {
    return n_2;
  }
};

const num_1 = 4;
const num_2 = 20;

console.log(num_1, num_2);
console.log(max(num_1, num_2));

const min = function (n_1, n_2) {//обозначаем функцию
  if (n_1 < n_2) {
    return n_1;//вывод
  }
  {
    return n_2;
  }
};

const num1 = 87;
const num2 = 10;

console.log(num1, num2);
console.log(min(num1, num2));

const max_min = (n_1, n_2) => (n_1 > n_2 ? n_1 : n_2); //max
// const min_max = (n_1, n_2) => n_1 < n_2 ? n_1 : n_2; - min
const a = 12;
const b = 94;
console.log(a, b);
console.log(max_min(a, b));

console.log('----------');

const Zero = function (arr = []) {//обозначаем функцию
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 100) {
      if (arr[i] % 10 === 0) {
        let Z = arr[i] / 10;
        arr[i] = Z + 'zero';
      }
    } else {
      let Z = arr[i] / 100;
      arr[i] = Z + 'zerozero';
    }
  }
  return arr;
};

const mas = [71, 10, 19, 3, 7, 50, 27, 38, 100, 45];

console.log(mas);
console.log(Zero(mas));
