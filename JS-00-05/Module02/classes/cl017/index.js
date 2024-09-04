const input = document.getElementById('input');

document.getElementById('value').addEventListener('click', () => {
  input.value = 'Hello, World!';

  // Current value
  // input.value

  // Preset/initial value
  // input.getAttribute('value')
})

document.getElementById('type').addEventListener('click', () => {
  // input.type = input.type !== 'date' ? 'date' : 'text';
  input.setAttribute('type', 'date');
})

document.getElementById('placeholder').addEventListener('click', () => {
  input.placeholder = 'Type something...';
})

document.getElementById('disable').addEventListener('click', () => {
  input.disabled = !input.disabled;
})

document.getElementById('data').addEventListener('click', () => {
  const data = input.dataset.something;

  console.log(`The value of the attribute data-something is -> ${data}`);
  input.dataset.something = 'Hello, world!'
  console.log(`Now the value is -> ${input.dataset.something}`);
})