function primeCheck(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    return true;
  } else {
    return false;
  }
}

let ans = primeCheck(13);
if (ans) {
  console.log("Prime");
} else {
  console.log("Not a Prime");
}
