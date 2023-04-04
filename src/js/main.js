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

const homesItems = data2
  .map(
    (hotel) =>
      `<div class="home__advantages--item">
         <figure class="home__advantages--img-wrapper">
           <img src = "${hotel.imageUrl}" alt="Hotel img" />
         </figure>
         <p class="apartments">${hotel.name}</p>
         <p class="apartments-location">${hotel.city}, ${hotel.country}</p>
      </div>`,
  )
  .join(' ');

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

const capitalizeFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

const optionsData = {
  adults: {
    value: 1,
    min: 1,
    max: 30,
  },
  children: {
    value: 0,
    min: 0,
    max: 10,
  },
  rooms: {
    value: 1,
    min: 1,
    max: 30,
  },
};

const optionContainer = document.getElementById('option');
const inputOptions = document.getElementById('adults-search');
inputOptions.placeholder = `${optionsData.adults.value} Adults — ${optionsData.children.value} Children — ${optionsData.rooms.value} Room`;

const createOptionsDiv = () => {
  const optionsDiv = document.createElement('div');
  optionsDiv.classList.add('options');
  optionsDiv.setAttribute('id', 'options');
  optionsDiv.innerHTML = `<div class="options-items" id="options-items"></div>
      <div class="options-text-div" id="options-text-div"></div>
      <div class="options-select-items" id="options-select-items"></div>`;
  optionContainer.appendChild(optionsDiv);
  createOptions();
  inputOptions.removeEventListener('click', createOptionsDiv);
};

inputOptions.addEventListener('click', createOptionsDiv);

const createOptions = () => {
  const optionsItems = document.getElementById('options-items');
  Object.keys(optionsData).forEach((option) => {
    const optionItem = document.createElement('div');
    optionItem.classList.add('options-item');
    optionItem.innerHTML = `
        <div class="options-description-text">
          <span>${capitalizeFirstLetter(option)}</span>
        </div>
        <div class="options-item-buttons">
          <button class="options-button options-minus-button_js" id="options-minus-button-${option}"  type="button" disabled="disabled">-</button>
          <span class="options-counter-number" id="options-counter-number-${option}">${
      optionsData[option].value
    }</span>
          <button class="options-button options-plus-button_js" id="options-plus-button-${option}" type="button">+</button>
        </div>
      `;
    optionsItems.appendChild(optionItem);
    document
      .getElementById(`options-plus-button-${option}`)
      .addEventListener('click', () => addOne(option));
    document
      .getElementById(`options-minus-button-${option}`)
      .addEventListener('click', () => removeOne(option));
  });
};

const addOne = (optionName) => {
  if (optionsData[optionName].value < optionsData[optionName].max) {
    optionsData[optionName].value++;
    if (optionName === 'children' && optionsData[optionName].value === 1) {
      addChildrenYearQuestion();
    }
    if (optionName === 'children') {
      addChildrenYearSelect();
    }
  }

  if (optionsData[optionName].value === optionsData[optionName].max) {
    const plusButton = document.getElementById(
      `options-plus-button-${optionName}`,
    );
    plusButton.setAttribute('disabled', 'disabled');
  }

  if (optionsData[optionName].value !== optionsData[optionName].min) {
    const minusButton = document.getElementById(
      `options-minus-button-${optionName}`,
    );
    minusButton.removeAttribute('disabled');
  }

  updateOptionCounter(optionName);
};

const removeOne = (optionName) => {
  if (optionsData[optionName].value > optionsData[optionName].min) {
    optionsData[optionName].value--;
    if (optionName === 'children' && optionsData[optionName].value === 0) {
      removeChildrenYearQuestion();
      document
        .getElementById('options-text-div')
        .classList.remove('options-text-div-click');
    }
    if (optionName === 'children') {
      removeChildrenYearSelect();
    }
  }

  if (optionsData[optionName].value === optionsData[optionName].min) {
    const minusButton = document.getElementById(
      `options-minus-button-${optionName}`,
    );
    minusButton.setAttribute('disabled', 'disabled');
  }

  if (optionsData[optionName].value !== optionsData[optionName].max) {
    const plusButton = document.getElementById(
      `options-plus-button-${optionName}`,
    );
    plusButton.removeAttribute('disabled');
  }

  updateOptionCounter(optionName);
};

const updateOptionCounter = (optionName) => {
  const optionCount = document.getElementById(
    `options-counter-number-${optionName}`,
  );
  optionCount.textContent = optionsData[optionName].value;
  inputOptions.placeholder = `${optionsData.adults.value} Adults — ${optionsData.children.value} Children — ${optionsData.rooms.value} Room`;
};

const addChildrenYearQuestion = () => {
  const optionTextDiv = document.getElementById('options-text-div');
  optionTextDiv.innerHTML =
    '<span class="options-text" id="options-text">What is the age of the child you’re<br/>travelling with?</span>';
  optionTextDiv.classList.add('options-text-div-click');
};

const removeChildrenYearQuestion = () => {
  const optionTextDiv = document.getElementById('options-text-div');
  optionTextDiv.innerHTML = '';
};

const addChildrenYearSelect = () => {
  const childrenAgeBlock = document.getElementById('options-select-items');
  const childrenAgeOptions = [...Array(18)]
    .map(
      (_, index) =>
        `<option value=${index}>${index} ${
          index === 1 ? 'year old' : 'years old'
        }</option>`,
    )
    .join('');
  childrenAgeBlock.innerHTML += `<div class="options-select-item"><select id="options-child-age" class="options-child-age-select" name="options-child-age">${childrenAgeOptions}</select></div>`;
};

const removeChildrenYearSelect = () => {
  const childrenAgeBlock = document.getElementById('options-select-items');
  const selectToRemove = childrenAgeBlock.querySelector('.options-select-item');
  if (selectToRemove) {
    selectToRemove.remove();
  }
};
