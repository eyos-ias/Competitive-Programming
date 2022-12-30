function kthLargest(nums, k) {
 
  nums.sort((a, b) => b - a);


  return nums[k - 1];
}
