import { input } from "./clear.js";

export function listenClick(charKeyBtn) {
  charKeyBtn.addEventListener('click', function () {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  })
}