var longestMountain = function(A) {
  let sol = 0;
  let i = 0;
  
  while (i + 1 < A.length) {
    while (i + 1 < A.length && A[i] === A[i + 1]) {
      i++;
    }
    
    let increasing = 0;
    let decreasing = 0;
    
    while (i + 1 < A.length && A[i] < A[i + 1]) {
      increasing++;
      i++;
    }
    
    while (i + 1 < A.length && A[i] > A[i + 1]) {
      decreasing++;
      i++;
    }
    
    if (increasing > 0 && decreasing > 0) {
      sol = Math.max(sol, increasing + decreasing + 1);
    }
  }
  
  return sol;
}
