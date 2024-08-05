const main = document.querySelector('main');
const root = document.querySelector(':root');
const input = document.getElementById('input');
const resultInput = document.getElementById('result');

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];

document.querySelectorAll('.charKey').forEach((charKeyBtn) => {
  charKeyBtn.addEventListener('click', function () {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  })
})

document.getElementById('clear').addEventListener('click', () => {
  input.value = '';

  input.focus();
})

document.getElementById('equal').addEventListener('click', calculate)

input.addEventListener('keydown', (e) => {
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
})

function calculate() {
  resultInput.value = 'ERROR';
  resultInput.classList.add('error')
  const result = eval(input.value);
  resultInput.value = result;
  resultInput.classList.remove('error')
}

document.getElementById(`copyToClipboard`).addEventListener('click', (e) => {
  const button = e.currentTarget;

  if (button.innerText === 'Copy') {
    button.innerText = 'Copied!';
    button.classList.add('success');
    navigator.clipboard.writeText(resultInput.value);
  } else {
    button.innerText = 'Copy';
    button.classList.remove('success');
  }

})

document.getElementById('themeSwitcher').addEventListener('click', () => {

  if (main.dataset.theme === 'light') {
    root.style.setProperty('--bg-color', '#032940');
    root.style.setProperty('--primary-color', '#0578a6');
    root.style.setProperty('--border-color', '#aaa');
    main.dataset.theme = 'dark';
  } else {

    root.style.setProperty('--bg-color', '#0578a6');
    root.style.setProperty('--primary-color', '#032940');
    root.style.setProperty('--border-color', '#035373');
    main.dataset.theme = 'light';
  }

})