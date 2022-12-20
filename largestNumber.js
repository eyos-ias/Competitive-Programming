function largestNumber(nums) {
  let largestNum = nums.map(x => x.toString()).sort((a, b) => (b + a) - (a + b)).join('');
  return largestNum[0] === '0' ? '0' : largestNum;
}

console.log(largestNumber([3,30,34,5,9])); // prints "9534330"
