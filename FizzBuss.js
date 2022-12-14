var fizzBuzz = function(n) {
    let fizzList = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      fizzList.push("FizzBuzz");
    } else if (i % 3 == 0) {
      fizzList.push("Fizz");
    } else if (i % 5 == 0) {
      fizzList.push("Buzz");
    } else {
      fizzList.push(i + "");
    }
  }
  return fizzList;
};

fizzBuzz(30);