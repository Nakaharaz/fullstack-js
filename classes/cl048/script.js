function divide(num) {
  console.log(num);
  if (num % 2 === 0) {
    divide(num / 2);
  } else {
    return num;
  }
}

// 2:35
divide(20)