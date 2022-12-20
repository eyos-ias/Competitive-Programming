function countingValleys(steps, path) {
    let valleys = 0;
    let height = 0;
    let isSeaLevel = true;
    for (const dir of path) {
        if (isSeaLevel) {
            isSeaLevel = false;
            if (dir === 'U') {
                height += 1;
            }
            if (dir === 'D') {
                height -= 1;
                valleys += 1;
            }
            continue;
        }
        if (dir === 'U') {
            height += 1;
        }
        if (dir === 'D') {
            height -= 1;
        }
        if (height === 0) {
            isSeaLevel = true;
        }
    }
    return valleys;
}

//asd