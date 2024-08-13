const main = document.querySelector('main');
const root = document.querySelector(':root');

export default function () {

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

}