'use strict';

const showSavingsPerMonth = (event) => {
  document.querySelector('.advantages__total').innerHTML = '1 896 Kč';
  document.querySelector('.advantages--premium').innerHTML =
    'Průměrná měsíční úspora člena Alza Premium';
  document.querySelector('.advantages--yearly').classList.remove('selected');
  document.querySelector('.advantages--monthly').classList.add('selected');
  event.preventDefault();
};

document
  .querySelector('.advantages--monthly')
  .addEventListener('click', showSavingsPerMonth);

const showSavingsPerYear = (event) => {
  document.querySelector('.advantages__total').innerHTML = '22 750 Kč';
  document.querySelector('.advantages--premium').innerHTML =
    'Průměrná roční úspora člena Alza Premium';
  document.querySelector('.advantages--monthly').classList.remove('selected');
  document.querySelector('.advantages--yearly').classList.add('selected');
  event.preventDefault();
};

document
  .querySelector('.advantages--yearly')
  .addEventListener('click', showSavingsPerYear);
