function smallerNumbers(nums) {
  const data = new Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        data[i] += 1;
      } else if (nums[i] < nums[j]) {
        data[j] += 1;
      }
    }
  }
  return data;
}
