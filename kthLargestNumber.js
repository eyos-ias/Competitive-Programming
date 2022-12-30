function kthLargest(nums, k) {
  // Sort the array in descending order
  nums.sort((a, b) => b - a);

  // Return the kth element
  return nums[k - 1];
}
