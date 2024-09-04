console.log('Program starts')

// const timeOutID = setTimeout(() => {
//   console.log('3 seconds has passed since the program started!')
// }, 1000 * 3)

// clearTimeout(timeOutID);

let seconds = 0;

const intervalId = setInterval(() => {
  seconds += 3;
  console.log(`${seconds} seconds has passed since the program started!`)
  if (seconds >= 10) {
    clearInterval(intervalId)
    console.log('Time is over! Byebye')
  }
}, 1000 * 3)