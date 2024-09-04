const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
const customParseFormat = require("dayjs/plugin/customParseFormat");

dayjs.extend(customParseFormat);
dayjs.extend(relativeTime);

function handleBirthDate(date) {

  // Get current date
  const now = dayjs();
  // Get date - string and parse to a date
  const birthday = dayjs(date, 'DD/MM/YYYY', 'pt-br');
  // Use method diff to get the currentAge -> E.g.: now(2024) - birthday(2004) = 20
  const currentAge = now.diff(birthday, 'years')
  // Use method add to sum current age in years + 1 to birth date, so then the next birthday will be -> E.g.: birthday(07/05/2004) + 21
  const nextBirthday = birthday.add(currentAge + 1, 'years');

  // Use method diff to get the days that left to the next birthday + 1 to fix the account
  const daysLeft = nextBirthday.diff(now, 'days') + 1;

  console.log(`You are ${currentAge} years old, your next birthday will be in ${nextBirthday.format('DD/MM/YYYY')}, in ${daysLeft} days`);

  return
}

module.exports = handleBirthDate;