function gradingStudents(grades) {
  // Write your code here
  return grades.map((item) => {
    if (item < 38) {
      return item;
    }
    const closestFive = Math.round(item / 5) * 5;
    const difference = closestFive - item;
    if (difference > 0 && difference < 3) {
      return closestFive;
    }
    return item;
  });
}
