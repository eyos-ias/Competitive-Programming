function merge(intervals) {
  if (intervals.length === 0 || intervals.length === 1) {
    return intervals;
  }

  intervals.sort(function(x, y) {
    return x[0] - y[0];
  });
  let result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let interval = intervals[i];
    if (interval[0] <= result[result.length - 1][1]) {
      result[result.length - 1][1] = Math.max(result[result.length - 1][1], interval[1]);
    } else {
      result.push(interval);
    }
  }

  return result;
}
