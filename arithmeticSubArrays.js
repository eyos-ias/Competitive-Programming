var checkArithmeticSubarrays = function(nums, l, r) {
    const check = (nums) => {
      const snums = new Set(nums);
      if (snums.size !== nums.length) {
        return snums.size === 1;
      }
      const mx = Math.max(...nums);
      const mn = Math.min(...nums);
      const step = Math.floor((mx - mn) / (nums.length - 1));
      for (let i = mn; i < mx; i += step) {
        if (!snums.has(i)) return false;
      }
      return true;
    };
    return l.map((start, index) => check(nums.slice(start, r[index] + 1)));
  }


