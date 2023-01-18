let user = "John Doe";
console.log(user);

let student = "Masha";
console.log(student);

user = student; //переопределение переменной
console.log(user);

console.log("----------");

let test = 1;
test++; //к переменной прибавили 1, теперь ее значение - 2
test += test; //к переменной, значение которой уже 2, прибавляем значение test (=2)
console.log(test); //в итоге получаем 2+2=4

test = false; //булевое значение
test = !test; //операция "переворачивает" булевое значение
console.log(test); //выводит true, т.к. поменяли с false на true с пом. !
console.log(typeof test); //выводит тип переменной (является булевой, т.к. имеет первонач. значение false)

console.log("----------");

let numb = [2, 3, 5, 8];
console.log(numb);

let sum = 1;

for (let i = 0; i < 4; i++) {
  sum *= numb[i];
}
console.log(sum);

console.log("----------");

let numbers = [2, 5, 8, 15, 0, 6, 20, 3];
console.log(numbers);

for (let i = 0; i < 8; i++) {
  if (numbers[i] > 5 && numbers[i] < 10) {
    console.log(numbers[i]);
  }
}

console.log("----------");

let arr = [2, 5, 8, 15, 0, 6, 20, 3];
console.log(arr);

for (let i = 0; i < 8; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}
