
 function bubbleSort(a) {
    // Initialize counter for number of swaps
    let numSwaps = 0;
  
    // Iterate through the array of integers
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a.length - 1; j++) {
        // Swap adjacent elements if they are in decreasing order
        if (a[j] > a[j + 1]) {
          [a[j], a[j + 1]] = [a[j + 1], a[j]];
          numSwaps++;
        }
      }
    }
  
    
    console.log(`Array is sorted in ${numOfSwaps} swaps.`);
  
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length - 1]}`);
  
    return a;
  }

bubbleSort([1,4,8,7]);