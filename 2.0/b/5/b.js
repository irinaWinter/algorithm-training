const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");
let [a, nums] = fileContent.toString().trim().split('\n');

nums = nums.split(' ').map(Number);

const getMaxSum = (nums) => {
    let max = nums[0]
    let acc = nums[0]
    let left = 0;
    let right = 0;

    for (right; right < nums.length; right++) {
        if (nums[left] < 0 || acc < 0) {
            left = right
            acc = nums[right]
        } else if (left === right) {
            acc = nums[right]
        } else {
            acc += nums[right]
        }

        if (acc > max) max = acc
    }

    return max
}

const res = getMaxSum(nums).toString();

fs.writeFileSync("output.txt", res);