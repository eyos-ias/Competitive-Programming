var maxCoins = function(piles) {
    piles.sort((a, b) => a - b);
    const x = Math.floor(piles.length / 3);
    let coin = 0;
    for (let i = 0; i < x; i++) {
      let data = piles.slice(-2);
      data = [piles[i]].concat(data);
      coin += data[1];
      piles.pop();
      piles.pop();
    }
    return coin;
  }
