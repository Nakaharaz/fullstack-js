import calculate from "./calculate.js";
import clear, { input } from "./clear.js";
import { listenClick } from "./clickListener.js";
import copyToClipboard from "./copyToClipboard.js";
import switchTheme from "./switchTheme.js";
import listenTyping from "./listenTyping.js";

document.querySelectorAll('.charKey').forEach((charKey) => listenClick(charKey))
document.getElementById('clear').addEventListener('click', clear)
document.getElementById('equal').addEventListener('click', calculate)
input.addEventListener('keydown', (e) => listenTyping(e))
document.getElementById(`copyToClipboard`).addEventListener('click', (e) => copyToClipboard(e))
document.getElementById('themeSwitcher').addEventListener('click', switchTheme)