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

console.log('----------');

// function replacer(match, p1, p2, p3) {
//     return [p3, p2, p1].join('.');
// }
//
// const newString = '2020-11-26'.replace(/(\d*)[-](\d*)[-](\d*)/g, replacer);
// console.log(newString);

function date(str) {
  const p = /(\d*)[-](\d*)[-](\d*)/g;
  return str.replace(p, (match, p1, p2, p3) => [p3, p2, p1].join('.'));
}
console.log(date('2020-11-26'));

console.log('----------');

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
    toString: function () {
      return this.city + ' ' + this.country + ' ' + this.hotel;
    },
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
    toString: function () {
      return this.city + ' ' + this.country + ' ' + this.hotel;
    },
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
    toString: function () {
      return this.city + ' ' + this.country + ' ' + this.hotel;
    },
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
    toString: function () {
      return this.city + ' ' + this.country + ' ' + this.hotel;
    },
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
    toString: function () {
      return this.city + ' ' + this.country + ' ' + this.hotel;
    },
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
    toString: function () {
      return this.city + ' ' + this.country + ' ' + this.hotel;
    },
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
    toString: function () {
      return this.city + ' ' + this.country + ' ' + this.hotel;
    },
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
    toString: function () {
      return this.city + ' ' + this.country + ' ' + this.hotel;
    },
  },
];

const loc = 'vil';

function trip(arr = [], str) {
  const reg = new RegExp(str);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toString().toLowerCase().match(reg)) {
      console.log(arr[i].toString());
    }
  }
}

trip(data, loc);
