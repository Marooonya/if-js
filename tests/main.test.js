import { randNumber } from '@ngneat/falso';
import expect from 'expect';

function Sum(first_num, second_num) {
  if (first_num + second_num !== 'number' || first_num + second_num === null) {
    return false;
  }
}
test('', () => {
  const first_num = randNumber();
  const second_num = randNumber();

  console.log(first_num, second_num);
  expect(Sum()).toBe(false);
});

function differentColours1(arr = []) {
  let i = 0;
  if (arr[i] === arr[i++]) {
    return false;
  }
}

test('', () => {
  const colours = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

  console.log(colours);
  expect(differentColours1(colours)).toBe(false);
});
