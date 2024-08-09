document.getElementById('sessionBtn').addEventListener('click', function () {
  const input = document.getElementById('session');
  sessionStorage.setItem('infox', input.value);

  input.value = ''
})

document.getElementById('readSession').addEventListener('click', () => {
  const info = sessionStorage.getItem('infox');
  alert(`The information is: ${info}`)
})

document.getElementById('localBtn').addEventListener('click', () => {
  const input = document.getElementById('local');
  localStorage.setItem('txt', input.value);
  input.value = '';
})

document.getElementById('readLocal').addEventListener('click', () => {
  const info = localStorage.getItem('txt');
  alert(`The information is: ${info}`)
})

document.getElementById('cookieBtn').addEventListener('click', () => {
  const input = document.getElementById('cookie');
  const expiration = `expires=${new Date(2024, 8, 10)};`
  const cookie = `info=${input.value};`;
  const path = 'path=/;';

  document.cookie = cookie + expiration + path;

  input.value = ''
})

document.getElementById('cookie2Btn').addEventListener('click', () => {
  const input = document.getElementById('cookie2');
  const expiration = `expires=${new Date(2024, 8, 10)};`
  const cookie = `txt=${input.value};`;
  const path = 'path=/;';

  document.cookie = cookie + expiration + path;

  input.value = ''
})