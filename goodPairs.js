function numIdenticalPairs(nums) {
    const numCounts = {};
    for (const num of nums) {
        if (numCounts[num]) {
            numCounts[num] += 1;
        } else {
            numCounts[num] = 1;
        }
    }

    let result = 0;
    for (const num in numCounts) {
        if (numCounts[num] > 1) {
            result += calculateCombination(numCounts[num], 2);
        }
    }
    return result;
}

function calculateCombination(num1, num2) {
    const upper = factorial(num1);
    const lower = factorial(num2) * factorial(num1 - num2);
    return upper / lower;
}

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
