export const input = document.getElementById('input');

export default function clear() {
  input.value = '';

  input.focus();
}