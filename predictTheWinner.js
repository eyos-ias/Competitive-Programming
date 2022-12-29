var PredictTheWinner = function (nums) {
    function helper(nums, scores, player) {
     
      if (nums.length === 0) {
        return scores[0] > scores[1];
      }
  
      let canWin = false;
      for (let i = 0; i < nums.length; i++) {
        scores[player] += nums[i];
  
  
        let otherPlayer = (player + 1) % 2;
        canWin = canWin || !helper(nums.slice(0, i).concat(nums.slice(i + 1)), scores, otherPlayer);
  
       
        scores[player] -= nums[i];
      }
  
      return canWin;
    }
  
  
    return helper(nums, [0, 0], 0);
  }
  