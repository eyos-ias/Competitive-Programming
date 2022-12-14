function insertionSort1(n, arr) {
    const lastNum = arr[n - 1];
  
    for (let i = n - 2; i >= 0; i--) {
      let current = arr[i];
  
      if (current > lastNum) {
        arr.splice(i + 1, 1, current);
        console.log(arr.join(' '));
      } else if (current < lastNum) {
        arr.splice(i + 1, 1, lastNum);
        console.log(arr.join(' '));
        break;
      }
    }
  }
  
  insertionSort1(5, [2, 4, 6, 8, 3]);