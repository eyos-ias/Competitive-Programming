var maxOperations =  function(nums, k) {
    let count = {};
    let result = 0;
    for (let x of nums) {
      if (count[k - x] && count[k - x] > 0) {
        count[k - x]--;
        result++;
      } else {
        count[x] = (count[x] || 0) + 1;
      }
    }
    return result;
  }
