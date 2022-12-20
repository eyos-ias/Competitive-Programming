function rearrangeArray(A) {
  A.sort();
  for (let i = 1; i < A.length; i += 2) {
    [A[i], A[i - 1]] = [A[i - 1], A[i]];
  }
  return A;
}

console.log(rearrangeArray([3,30,34,5,9])); // prints [34, 3, 5, 9, 30]
