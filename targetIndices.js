function targetIndices(nums, target) {
  let data = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
  for (let x = 0; x < nums.length; x++) {
    if (target === nums[x]) {
      data.push(x);
    }
  }
  return data;
}
