import {footerDiv} from './main.js'

export function timer() {
  const d = new Date();

  const month = addingZero(d.getMonth() + 1),
    day = addingZero(d.getDate()),
    hour = addingZero(d.getHours()),
    minute = addingZero(d.getMinutes()),
    second = addingZero(d.getSeconds());

  footerDiv.innerHTML =
    day +
    "." +
    month +
    "." +
    d.getFullYear() +
    " " +
    " " +
    hour +
    ":" +
    minute +
    ":" +
    second;
}

function addingZero(inputValue: number) {
  if (inputValue < 10) {
    return "0" + inputValue;
  } else {
    return inputValue;
  }
}
