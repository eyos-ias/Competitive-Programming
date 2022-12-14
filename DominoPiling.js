function maxDominoes(M, N) {
    

    // Calculate the total number of squares on the board
    let totalSquares = M * N;
  
    // Calculate the maximum number of dominoes that can be placed on the board
    let maxDominoes = totalSquares / 2;
  
    return Math.floor(maxDominoes);
  }

  console.log(maxDominoes(3,3));