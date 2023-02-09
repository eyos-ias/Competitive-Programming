var findAnagrams = function(s, p) {
  let sol = [];
  let count = {};
  for (let i = 0; i < p.length; i++) {
    if (!count[p[i]]) count[p[i]] = 0;
    count[p[i]]++;
  }
  let required = Object.keys(count).length;

  for (let r = 0, l = 0; r < s.length; r++) {
    if (count[s[r]] !== undefined) {
      count[s[r]]--;
      if (count[s[r]] === 0) required--;
    }
    if (r - l + 1 === p.length) {
      if (required === 0) sol.push(l);
      if (count[s[l]] !== undefined) {
        count[s[l]]++;
        if (count[s[l]] > 0) required++;
      }
      l++;
    }
  }

  return sol;
};
