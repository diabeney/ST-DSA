function majorityElement(nums) {
    const obj = {};
    let majority;
    nums.forEach(value => obj[value] ? obj[value]++ : obj[value] = 1);
    Object.keys(obj).reduce((prev, curr) => obj[curr] > obj[prev] && (majority = curr));
    return majority;
}

console.log(majorityElement([2,2,1,1,1,2,2])) // 2