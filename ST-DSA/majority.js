function majorityElement(nums) {
    const obj = {}; 
    let majority;
    nums.forEach(value => obj[value] ? obj[value]++ : obj[value] = 1);
    Object.keys(obj).reduce((acc, curr) => obj[curr] > obj[acc] && (majority = curr));
    return majority;
}
console.log(majorityElement([2,1,2,1,2,2])) // 2
























function secondSoln(nums) {
    const sorted = nums.reduce((acc, curr) => { return acc[curr] ? acc[curr]++ : acc[curr] = 1, acc}, {});
    let majority = 0;
    for(const [ key, value ] of Object.entries(sorted)){
        if(value > majority) majority = key
    }
    return majority
}

// console.log(secondSoln([2,2,1,1,2,2])) // 2