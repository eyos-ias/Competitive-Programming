function countingSort(arr) {
    var data = new Array(100).fill(0); // Create an array of 100 zeros
      for (var i = 0; i < arr.length; i++) {
        data[arr[i]] += 1;
      }
      return data;
    
    }
