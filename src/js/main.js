import { capitalizeFirstLetter } from './helpers.js';
import { hotelsUrl, homesStorageData } from './constants.js';

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

const citySearchInput = document.getElementById('city-search');
let searchValue = '';

citySearchInput.addEventListener('input', (event) => {
  searchValue = event.target.value;
});

const availableHotel = document.querySelector('.available-hotels');

const searchSlider = (data) => {
  if (data.length !== 0) {
    const homesItems = data
      .map(
        (hotel) =>
          `<div class="home__advantages--item">
        <figure class="home__advantages--img-wrapper" id="uuu">
         <img src = "${hotel.imageUrl}" alt="Hotel img" />
        </figure>
        <p class="apartments">${hotel.name}</p>
        <p class="apartments-location">${hotel.city}, ${hotel.country}</p>
      </div>`,
      )
      .join(' ');

    if (data.length < 4) {
      availableHotel.innerHTML = `<section class="home">
      <div class="home__container">
        <h2 class="home__title">Available hotels</h2>
        <div class="home__advantages search-block">
         ${homesItems}
        </div>
      </div>
     </section>`;
    }

    if (data.length >= 4) {
      availableHotel.innerHTML = `<section class="home">
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
        <h2 class="home__title">Available hotels</h2>
        <div class="slider-container">
          <div class="home__advantages slider slider-for-search-block">
            ${homesItems}
         </div>
       </div>
     </div>
    </section>`;

      const sliderLength = 308 * data.length;
      document.querySelector(
        '.slider-for-search-block',
      ).style.width = `${sliderLength}px`;

      let offset = 0;
      const sliderLine = document.querySelector('.slider');
      const commonWidth = 309 * data.length - 309 * 4 - 1;

      document.querySelector('.button-prev').style.display = 'none';

      document.querySelector('.button-next').addEventListener('click', () => {
        offset += 309;
        if (offset > commonWidth) {
          document.querySelector('.button-next').style.display = 'none';
        }
        if (offset > 0) {
          document.querySelector('.button-prev').style.display = 'flex';
        }
        if (offset > 8343) {
          offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
      });

      document.querySelector('.button-prev').addEventListener('click', () => {
        offset -= 309;
        if (offset === 0) {
          document.querySelector('.button-prev').style.display = 'none';
        }
        if (offset < 8035) {
          document.querySelector('.button-next').style.display = 'flex';
        }
        if (offset < 0) {
          offset = 1235;
        }
        sliderLine.style.left = -offset + 'px';
      });
    }
  } else {
    availableHotel.innerHTML = `<section class="home not-found">
      <div class="home__container not-found-home">
        <h2 class="home__title not-found-home__title">Sorry, we can't find this hotel or place:/</h2>
     </div>
   </section>`;
  }
};

const apiUrl = 'https://if-student-api.onrender.com/api/hotels?';
const searchInput = document.getElementById('city-search');
const searchButton = document.querySelector('.top-section__form--button');

const searchHotels = (event) => {
  event.preventDefault();
  const searchValue = searchInput.value;

  fetch(
    apiUrl +
      new URLSearchParams({
        search: `${searchValue}`,
      }),
  )
    .then((response) => response.json())
    .then((data) => {
      searchSlider(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  availableHotel.scrollIntoView({
    behavior: 'smooth',
  });
};

searchButton.addEventListener('click', searchHotels);

const slider = document.getElementById('wrapper_for_category');

const createHomesBlock = (data) => {
  const homesItems = data
    .map(
      ({ imageUrl, name, city, country }) =>
        `<div class="home__advantages--item">
         <figure class="home__advantages--img-wrapper">
           <img src = "${imageUrl}" alt="Hotel img" />
         </figure>
         <p class="apartments">${name}</p>
         <p class="apartments-location">${city}, ${country}</p>
      </div>`,
    )
    .join(' ');

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
};

if (sessionStorage.getItem(homesStorageData)) {
  const homesData = JSON.parse(sessionStorage.getItem(homesStorageData));
  createHomesBlock(homesData);
} else {
  fetch(hotelsUrl)
    .then((response) => response.json())
    .then((data) => {
      sessionStorage.setItem(homesStorageData, JSON.stringify(data));
      createHomesBlock(data);
    });
}

let offset = 0;
const sliderLine = document.querySelector('.slider');

document.querySelector('.button-prev').style.display = 'none';

document.querySelector('.button-next').addEventListener('click', () => {
  offset += 309;
  if (offset > 8034) {
    document.querySelector('.button-next').style.display = 'none';
  }
  if (offset > 0) {
    document.querySelector('.button-prev').style.display = 'flex';
  }
  if (offset > 8343) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
});

document.querySelector('.button-prev').addEventListener('click', () => {
  offset -= 309;
  if (offset === 0) {
    document.querySelector('.button-prev').style.display = 'none';
  }
  if (offset < 8035) {
    document.querySelector('.button-next').style.display = 'flex';
  }
  if (offset < 0) {
    offset = 1235;
  }
  sliderLine.style.left = -offset + 'px';
});
