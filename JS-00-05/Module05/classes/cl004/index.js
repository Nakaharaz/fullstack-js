function PhoneNumber(phoneNumberString) {
  
  // Replace/remove all characters that isn't numbers or ()/-
  const fixedString = phoneNumberString.replace(/[\sa-zA-z]/g, '')

  // Get 1 up to 3 numbers after "+" and set as Country Code
  this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]
  
  // Get all digits ---\d+---
  // before "(" ---(?<=\()---
  // and after ")" ---(?=\))--- 
  this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0]

  // Get all sequence of any char --- .+ --- after ")" and remove "-"
  this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, '')
}

console.log(new PhoneNumber('+55 (19) 9 3753-8534'))
console.log(new PhoneNumber('+353 (855) 024 5131'))