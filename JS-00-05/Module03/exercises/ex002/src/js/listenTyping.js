import calculate from "./calculate.js";
import { input } from "./clear.js";

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];

export default function (e) {
  e.preventDefault();

  if (allowedKeys.includes(e.key)) {
    input.value += e.key
    return;
  }

  if (e.key === 'Backspace') {
    input.value = input.value.slice(0, -1);
  }

  if (e.key === 'Enter') {
    calculate()
  }
}