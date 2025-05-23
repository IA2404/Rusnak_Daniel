import { Calculator } from './calculator.js';

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const calculator = new Calculator(display);
const operatorButtons = document.querySelectorAll('[data-operator]');



buttons.forEach(button => {
  if (button.dataset.number !== undefined) {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.dataset.number);
    });
  }

  if (button.dataset.operator !== undefined) {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.dataset.operator);

    // Удалить .active у всех кнопок
    operatorButtons.forEach(btn => btn.classList.remove('active'));

    // Добавить .active только текущей
    button.classList.add('active');
  });
}

  if (button.dataset.action === 'equals') {
  button.addEventListener('click', () => {
    calculator.compute();
    operatorButtons.forEach(btn => btn.classList.remove('active'));
  });
}

  if (button.dataset.action === 'clear') {
  button.addEventListener('click', () => {
    calculator.clear();
    operatorButtons.forEach(btn => btn.classList.remove('active'));
  });
}

});

