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

const sum_2 = (a) => (b) => a + b;

console.log(sum_2(2)(5));

console.log('----------');

const differentColours = () => {
  let i = 0;

  return (event) => {
    event.target.style.color = colours[i++];

    if (colours.length === i) {
      i = 0;
    }
  };
};

const colours = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

// const text_1 = document.getElementById('text1');
// const text_2 = document.getElementById('text2');
// const text_3 = document.getElementById('text3');
//
// text_1.addEventListener('click', differentColours());
// text_2.addEventListener('click', differentColours());
// text_3.addEventListener('click', differentColours());

console.log('----------');

const date = (str) => {
  const p = /(\d*)[-](\d*)[-](\d*)/g;
  return str.replace(p, (match, p1, p2, p3) => [p3, p2, p1].join('.'));
};

console.log(date('2020-11-26'));

console.log('----------');

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

const place = 'er';

const findLocation = (arr, str) => {
  const foundLocation = [];

  for (let i = 0; i < arr.length; i++) {
    if (
      Object.values(arr[i]).join(', ').toLowerCase().includes(str.toLowerCase())
    ) {
      foundLocation.push(Object.values(arr[i]).join(', '));
    }
  }

  if (!foundLocation.length) {
    return 'Not found';
  }

  return foundLocation;
};

console.log(findLocation(data, place));

console.log('----------');

const newPalindrome = (str) => str.split('').reverse().join('') === str;

console.log(newPalindrome('шалаш'));

const newFindLocation = (arr, str) => {
  const foundLocation = [];

  arr.forEach((item) => {
    if (
      Object.values(item).join('').toLowerCase().includes(str.toLowerCase())
    ) {
      foundLocation.push(Object.values(item).join(', '));
    }
    if (!foundLocation.length) {
      return 'Not found';
    }
  });

  return foundLocation;
};

console.log(newFindLocation(data, place));

const hotels = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa Cruz de Tenerife',
    country: 'Spain',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Virgin Hotel',
    city: 'Chicago',
    country: 'USA',
  },
  {
    name: 'Grand Beach Resort',
    city: 'Dubai',
    country: 'United Arab Emirates',
  },
  {
    name: 'Shilla Stay',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    name: 'San Firenze Suites',
    city: 'Florence',
    country: 'Italy',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Black Penny Villas',
    city: 'BTDC, Nuca Dua',
    country: 'Indonesia',
  },
  {
    name: 'Koko Hotel',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    name: 'Ramada Plaza',
    city: 'Istanbul',
    country: 'Turkey',
  },
  {
    name: 'Waikiki Resort Hotel',
    city: 'Hawaii',
    country: 'USA',
  },
  {
    name: 'Puro Hotel',
    city: 'Krakow',
    country: 'Poland',
  },
  {
    name: 'Asma Suites',
    city: 'Santorini',
    country: 'Greece',
  },
  {
    name: 'Cityden Apartments',
    city: 'Amsterdam',
    country: 'Netherlands',
  },
  {
    name: 'Mandarin Oriental',
    city: 'Miami',
    country: 'USA',
  },
  {
    name: 'Concept Terrace Hotel',
    city: 'Rome',
    country: 'Italy',
  },
  {
    name: 'Ponta Mar Hotel',
    city: 'Fortaleza',
    country: 'Brazil',
  },
  {
    name: 'Four Seasons Hotel',
    city: 'Sydney',
    country: 'Australia',
  },
  {
    name: 'Le Meridien',
    city: 'Nice',
    country: 'France',
  },
  {
    name: 'Apart Neptun',
    city: 'Gdansk',
    country: 'Poland',
  },
  {
    name: 'Lux Isla',
    city: 'Ibiza',
    country: 'Spain',
  },
  {
    name: 'Nox Hostel',
    city: 'London',
    country: 'UK',
  },
  {
    name: 'Leonardo Vienna',
    city: 'Vienna',
    country: 'Austria',
  },
  {
    name: 'Adagio Aparthotel',
    city: 'Edinburgh',
    country: 'UK',
  },
  {
    name: 'Steigenberger Hotel',
    city: 'Hamburg',
    country: 'Germany',
  },
];

const sortCountries = (arr) => {
  const sortedCountries = {};

  arr.forEach((item) => {
    sortedCountries[item.country]
      ? sortedCountries[item.country].push(item.city)
      : (sortedCountries[item.country] = [item.city]);
  });

  return sortedCountries;
};

console.log(sortCountries(hotels));

const createCalendar = (daysInMonth, dayOfWeek, daysInWeek) => {
  const calendar = Array.from(Array(dayOfWeek >= 6 ? 6 : 5), () => [
    ...Array(daysInWeek),
  ]);
  let daysCreated = 1;

  for (let i = 0; i < calendar.length; i++) {
    for (let j = 0; j < calendar[i].length; j++) {
      if (i === 0 && j < dayOfWeek) {
        calendar[i][j] = daysInMonth - dayOfWeek + j + 1;
        continue;
      }

      calendar[i][j] = daysCreated;
      daysCreated++;

      if (daysCreated > daysInMonth) {
        daysCreated = 1;
      }
    }
  }

  console.log(calendar);
};

createCalendar(30, 7, 7);

const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

const deepEqual = (object1, object2) => {
  if (object1 === object2) {
    return true;
  } else if (
    (object1 &&
      object2 &&
      typeof object1 === 'object' &&
      typeof object2 === 'object' &&
      Object.keys(object1).length === Object.keys(object2).length &&
      Object.keys(object1).join('') === Object.keys(object2).join('')) ||
    (object1 &&
      object2 &&
      typeof object1 === 'object' &&
      typeof object2 === 'object' &&
      Object.keys(object1).length === Object.keys(object2).length &&
      Object.keys(object1).join('') === Object.keys(object2).reverse().join(''))
  ) {
    for (let i = 0; i < Object.getOwnPropertyNames(object1).length; i++) {
      return deepEqual(
        object1[Object.getOwnPropertyNames(object1)[i]],
        object2[Object.getOwnPropertyNames(object1)[i]],
      );
    }
  } else return false;
};

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));
console.log(deepEqual(obj2, obj3));

const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  },
];

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user1 = new User('Вася', 'Петров');

console.log(user1);

class Student extends User {
  constructor(firstName, lastName, admissionYear, courseName) {
    super(firstName, lastName);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  get course() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.admissionYear;
  }
}

const student1 = new Student('Вася', 'Петров', 2020, 'java');

console.log(student1);

class Students {
  constructor(studentsData) {
    this.students = studentsData.reduce(
      (acc, student) => [
        ...acc,
        new Student(
          student.firstName,
          student.lastName,
          student.admissionYear,
          student.courseName,
        ),
      ],
      [],
    );
  }

  getInfo() {
    return this.students
      .sort((a, b) => a.course - b.course)
      .map(
        (student) =>
          `${student.fullName} - ${student.courseName}, ${student.course}`,
      );
  }
}

const students = new Students(studentsData);
console.log(students.getInfo());

const changeTextColor = (text) => {
  const iteratorRange = {
    colors: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
    from: 0,
    to: 4,

    [Symbol.iterator]() {
      return this;
    },

    next() {
      if (this.current === undefined) {
        this.current = this.from;
      }
      text.style.color = this.colors[this.current];
      this.current++;
      if (this.current >= this.to + 1) {
        this.current = this.from;
      }
    },
  };

  return () => {
    iteratorRange.next();
  };
};

// text_1.addEventListener('click', changeTextColor(text_1));
// text_2.addEventListener('click', changeTextColor(text_2));
// text_3.addEventListener('click', changeTextColor(text_3));

const data2 = [
  {
    id: '71ce9eac-e9b9-44f0-a342-9ff0b565f3b7',
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
  },
  {
    id: 'aa560608-a879-48a7-80b6-deff2806b250',
    name: 'Apartment Sunshine',
    city: 'Santa  Cruz de Tenerife',
    country: 'Spain',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
  },
  {
    id: '1d88fefe-edf1-4cda-844a-babbf29bb2b3',
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
  },
  {
    id: 'a2bf824d-edd8-41f0-8b70-244334086ab4',
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
  },
  {
    id: '4024535d-a498-4274-b7cb-f01ada962971',
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
  },
  {
    id: 'e51e71f6-6baf-4493-b3ae-25dc27cdc238',
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
  },
  {
    id: '87d2b966-2431-43f3-8c0d-2c8723474dfc',
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
  },
  {
    id: '190221c6-b18f-4dba-97de-e35f0e14c023',
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
  },
];

const slider = document.getElementById('wrapper_for_category');

const homesItems = data2.map((hotel) =>
      `<div class="home__advantages--item">
         <figure class="home__advantages--img-wrapper">
           <img src = "${hotel.imageUrl}" alt="Hotel img" />
         </figure>
         <p class="apartments">${hotel.name}</p>
         <p class="apartments-location">${hotel.city}, ${hotel.country}</p>
      </div>`,
).join(' ');

console.log(homesItems);

slider.innerHTML = `<section class="home">
                     <div class="home__container">
                       <button class="button-next">
                         <figure class="circle-for-desktop">
                           <svg class="arrow-for-desktop">
                             <use href="src/images/triphouse.svg#arrow" />
                           </svg>
                         </figure>
                       </button>
                       <button class="button-prev">
                         <figure class="circle-for-desktop">
                           <svg class="arrow-for-desktop arrow-js">
                             <use href="src/images/triphouse.svg#arrow" />
                           </svg>
                         </figure>
                       </button>
                       <h2 class="home__title">Homes guests loves</h2>
                         <div class="slider-container">
                           <div class="home__advantages slider">
                             ${homesItems}
                           </div>
                         </div>
                       </div>
                    </section>`;

let offset = 0;
let width;
const sliderLine = document.querySelector('.slider');

document.querySelector('.button-next').addEventListener('click', () => {
  offset += 309;
  if (offset > 1465) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
});

document.querySelector('.button-prev').addEventListener('click', () => {
  offset -= 309;
  if (offset < 0) {
    offset = 1235;
  }
  sliderLine.style.left = -offset + 'px';
});
