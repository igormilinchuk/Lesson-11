let prompt = require('prompt-sync')();

const InputDate = prompt('Введіть дату у форматі DD MM YYYY: ');
const InputTime = prompt('Введіть час у форматі HH MM SS: ');

const [year, month, day] = InputDate.split(' ').reverse();
const [hours, minutes, seconds] = InputTime.split(' ');

const date = new Date(year, month - 1, day, hours, minutes, seconds);

const timeDifference = date.getTime() - Date.now();

setTimeout(workInTime, timeDifference);

function workInTime() {
  console.log('Програма виконалась о ' + new Date());
}
