function Prediction(nums) {
    if (nums.length % 2 === 0) {
      return true;
    }
    let scores = [0, 0];
    for (let index = 0; index < nums.length; index++) {
      if (index % 2 === 0) {
        scores[0] += nums[index];
      } else {
        scores[1] += nums[index];
      }
    }
    let odd = scores[0],
      even = scores[1];
  
    let PlayerOneFirstMove = Math.max(nums[0], nums[nums.length - 1]);
    let PlayerTwoChoice = Math.max(odd - PlayerOneFirstMove, even);
    let PlayerOneFinalChoose = Math.min(odd - PlayerOneFirstMove, even);
    if (PlayerTwoChoice <= PlayerOneFirstMove + PlayerOneFinalChoose) {
      return true;
    } else {
      return false;
    }
  }
  