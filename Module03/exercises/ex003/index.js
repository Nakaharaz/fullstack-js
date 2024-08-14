const dayjs = require('dayjs');
const customParseFormat = require("dayjs/plugin/customParseFormat");
require('dayjs/locale/pt-br')

dayjs.extend(customParseFormat);

function handleBirthDate(date) {
  const now = dayjs();
  const birthDay = dayjs(date, 'DD/MM/YYYY', 'pt-br');
  const diff = now.diff(birthDay.set('year', now.year()));
  if (diff < 0) {
    const nextBirthDay = birthDay.set('year', now.year()).format('DD/MM/YYYY');
    console.log(`Your next birth day will be in ${nextBirthDay}`);
    return;
  }

  const nextBirthDay = birthDay.set('year', now.year() + 1).format('DD/MM/YYYY');
  console.log(`Your next birth day will be in ${nextBirthDay}`);

  return
}

handleBirthDate('07/05/2004')