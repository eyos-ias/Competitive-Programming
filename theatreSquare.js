function minFlagstones(n, m, a) {
    let theatreSquareArea = n * m;
    let flagstoneArea = a * a;
    let minFlagstones = theatreSquareArea / flagstoneArea;
    return Math.ceil(minFlagstones);
  }
  
  console.log(minFlagstones(6,6,4)); 
