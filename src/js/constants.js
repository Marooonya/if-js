export const hotelsUrl = 'https://if-student-api.onrender.com/api/hotels';
export const homesStorageData = 'homesItems';
export const optionsData = {
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
export const optionContainer = document.getElementById('option');
export const inputOptions = document.getElementById('adults-search');
export const citySearchInput = document.getElementById('city-search');
export const availableHotel = document.querySelector('.available-hotels');
export const apiUrl = 'https://if-student-api.onrender.com/api/hotels?';
export const searchInput = document.getElementById('city-search');
export const searchButton = document.querySelector(
  '.top-section__form--button',
);
export const slider = document.getElementById('wrapper_for_category');
