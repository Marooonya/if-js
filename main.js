let user = 'John Doe';
console.log(user);

const student = 'Masha';
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

const numb = [2, 3, 5, 8];
console.log(numb);

let sum = 1;

for (let i = 0; i < 4; i++) {
  sum *= numb[i];
}
console.log(sum);

console.log('----------');

const numbers = [2, 5, 8, 15, 0, 6, 20, 3];
console.log(numbers);

for (let i = 0; i < 8; i++) {
  if (numbers[i] > 5 && numbers[i] < 10) {
    console.log(numbers[i]);
  }
}

console.log('----------');

const arr = [2, 5, 8, 15, 0, 6, 20, 3];
console.log(arr);

for (let i = 0; i < 8; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}

console.log('----------');

const palindrome = function (string) {
  //обозначаем функцию
  for (let i = 0; i < string.length / 2; i++) {
    //"пробегаем" буквы до середины, т.к. сравниваем первую половину с зеркально отраженной правой
    if (string[i] === string[string.length - i - 1]) {
      //1-ый эл. с индексом 0 (например, ш) сравниваем с последним(длина "шалаш" - 5, отнимаем i, чтобы приблизиться к середине слова, и 1, т.к. индекс последнего элемента на 1 меньше длины всего слова)
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

const max = function (n_1, n_2) {
  //обозначаем функцию
  if (n_1 > n_2) {
    return n_1; //вывод
  }
  {
    return n_2;
  }
};

const num_1 = 4;
const num_2 = 20;

console.log(num_1, num_2);
console.log(max(num_1, num_2));

const min = function (n_1, n_2) {
  //обозначаем функцию
  if (n_1 < n_2) {
    return n_1; //вывод
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

const Zero = function (arr = []) {
  //обозначаем функцию
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 100) {
      if (arr[i] % 10 === 0) {
        const Z = arr[i] / 10;
        arr[i] = Z + 'zero';
      }
    } else {
      const Z = arr[i] / 100;
      arr[i] = Z + 'zerozero';
    }
  }
  return arr;
};

const mas = [71, 10, 19, 3, 7, 50, 27, 38, 100, 45];

console.log(mas);
console.log(Zero(mas));

console.log('----------');

function Sum() {
  const first_num = 2;
  const second_num = 5;

  return function operation() {
    return first_num + second_num;
  };
}
console.log(Sum(2)(5));

console.log('----------');

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const colours = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

differentColours1(colours);
differentColours2(colours);
differentColours3(colours);

function differentColours1(arr = []) {
  let i = 0;
  return text1.addEventListener('click', (event) => {
    event.target.style.color = arr[i++];
    if (arr.length === i) {
      i = 0;
    }
  });
}

function differentColours2(arr = []) {
  let i = 0;
  return text2.addEventListener('click', (event) => {
    event.target.style.color = arr[i++];
    if (arr.length === i) {
      i = 0;
    }
  });
}

function differentColours3(arr = []) {
  let i = 0;
  return text3.addEventListener('click', (event) => {
    event.target.style.color = arr[i++];
    if (arr.length === i) {
      i = 0;
    }
  });
}

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
      return this.city + ',' + this.country + ',' + this.hotel;
    },
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
    toString: function () {
      return this.city + ',' + this.country + ',' + this.hotel;
    },
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
    toString: function () {
      return this.city + ',' + this.country + ',' + this.hotel;
    },
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
    toString: function () {
      return this.city + ',' + this.country + ',' + this.hotel;
    },
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
    toString: function () {
      return this.city + ',' + this.country + ',' + this.hotel;
    },
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
    toString: function () {
      return this.city + ',' + this.country + ',' + this.hotel;
    },
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
    toString: function () {
      return this.city + ',' + this.country + ',' + this.hotel;
    },
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
    toString: function () {
      return this.city + ',' + this.country + ',' + this.hotel;
    },
  },
];

const loc = 'ber';

function trip(arr = [], str) {
  const reg = new RegExp(str);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toString().toLowerCase().match(reg)) {
      console.log(arr[i].toString());
    }
  }
}

trip(data, loc);

console.log('----------');

const newPalindrome = (str = '') =>
  str.split([,]).reverse().join('') === str
    ? console.log('palindrome')
    : console.log('no palindrome');

newPalindrome('шалаш');

function newTrip(arr = [], str) {
  const reg = new RegExp(str);
  arr.forEach((index) => {
    if (index.toString().toLowerCase().match(reg)) {
      console.log(index.toString());
    }
  });
}

newTrip(data, loc);

const hotels = [
  {
    name: "Hotel Leopold",
    city: "Saint Petersburg",
    country: "Russia",
  },
  {
    name: "Apartment Sunshine",
    city: "Santa Cruz de Tenerife",
    country: "Spain",
  },
  {
    name: "Villa Kunerad",
    city: "Vysokie Tatry",
    country: "Slowakia",
  },
  {
    name: "Hostel Friendship",
    city: "Berlin",
    country: "Germany",
  },
  {
    name: "Radisson Blu Hotel",
    city: "Kyiv",
    country: "Ukraine",
  },
  {
    name: "Paradise Hotel",
    city: "Guadalupe",
    country: "Mexico",
  },
  {
    name: "Hotel Grindewald",
    city: "Interlaken",
    country: "Switzerland",
  },
  {
    name: "The Andaman Resort",
    city: "Port Dickson",
    country: "Malaysia",
  },
  {
    name: "Virgin Hotel",
    city: "Chicago",
    country: "USA",
  },
  {
    name: "Grand Beach Resort",
    city: "Dubai",
    country: "United Arab Emirates",
  },
  {
    name: "Shilla Stay",
    city: "Seoul",
    country: "South Korea",
  },
  {
    name: "San Firenze Suites",
    city: "Florence",
    country: "Italy",
  },
  {
    name: "The Andaman Resort",
    city: "Port Dickson",
    country: "Malaysia",
  },
  {
    name: "Black Penny Villas",
    city: "BTDC, Nuca Dua",
    country: "Indonesia",
  },
  {
    name: "Koko Hotel",
    city: "Tokyo",
    country: "Japan",
  },
  {
    name: "Ramada Plaza",
    city: "Istanbul",
    country: "Turkey",
  },
  {
    name: "Waikiki Resort Hotel",
    city: "Hawaii",
    country: "USA",
  },
  {
    name: "Puro Hotel",
    city: "Krakow",
    country: "Poland",
  },
  {
    name: "Asma Suites",
    city: "Santorini",
    country: "Greece",
  },
  {
    name: "Cityden Apartments",
    city: "Amsterdam",
    country: "Netherlands",
  },
  {
    name: "Mandarin Oriental",
    city: "Miami",
    country: "USA",
  },
  {
    name: "Concept Terrace Hotel",
    city: "Rome",
    country: "Italy",
  },
  {
    name: "Ponta Mar Hotel",
    city: "Fortaleza",
    country: "Brazil",
  },
  {
    name: "Four Seasons Hotel",
    city: "Sydney",
    country: "Australia",
  },
  {
    name: "Le Meridien",
    city: "Nice",
    country: "France",
  },
  {
    name: "Apart Neptun",
    city: "Gdansk",
    country: "Poland",
  },
  {
    name: "Lux Isla",
    city: "Ibiza",
    country: "Spain",
  },
  {
    name: "Nox Hostel",
    city: "London",
    country: "UK",
  },
  {
    name: "Leonardo Vienna",
    city: "Vienna",
    country: "Austria",
  },
  {
    name: "Adagio Aparthotel",
    city: "Edinburgh",
    country: "UK",
  },
  {
    name: "Steigenberger Hotel",
    city: "Hamburg",
    country: "Germany",
  },
];

function coutryAndCity(hotelInfo = []) {
  const countryCity = [];
  const cityOfCountry = [];
  const result = [];
  hotelInfo.forEach((item) => {
    if (!result.includes(item.country)) {
      countryCity.push(item.country);
    }
  });
  for (const i in countryCity) {
    const arr = [];
    hotelInfo.forEach((item) => {
      if (countryCity[i] === item.country) {
        arr.push(item.city);
      }
    });
    cityOfCountry.push(arr);
  }
  for (let n = 0; n < countryCity.length; n++) {
    result.push({ [countryCity[n]]: cityOfCountry[n] });
  }
  return { ...result };
}

console.log(coutryAndCity(hotels));

const days = []; //пустой массив, который мы заполняем
const dayInMonth = 30; //кол-во дней в месяце
const dayInWeek = 7; //кол-во дней в неделе
const dayOfWeek = 3; //день недели (0-пн, 1-вт, 2-ср, 3-чт, 4-пт, 5-сб, 6-вс)
const firstDay = 29; //день, с которого начинается КАЛЕНДАРНЫЙ ЛИСТ, например, май начинается с пн 29 числа прошлого месяца

function calendar(arr = [], day, monthDay, weekDay, dayWeek) {
  arr = Array(5).fill().map(() => Array());
  arr.forEach((index) => {
    while (day <= monthDay + 1 && index.length < weekDay) {
      index.push(day++);
    if (day === monthDay + 1 && index.length < weekDay) {
        day = 1;
      }
    }
    day + 1;
    index.forEach((item) => {
      if (index.indexOf(item) === dayWeek) {
        console.log('число, соответствующее ' + dayWeek + ' : ' + item);
      }
    });
  });
  console.log(arr);
}

calendar(days, firstDay, dayInMonth, dayInWeek, dayOfWeek);
//вводим пустой массив ("календарный лист")
//вводим день, с которого календарный лист начинается
//вводим кол-во дней в месяце и в неделе
//вводим "день недели" и получаем все соответствующие даты
