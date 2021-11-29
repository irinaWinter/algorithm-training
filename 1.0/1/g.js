const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");
const arr = fileContent.toString().split(' ').map(item => Number(item));

let [n, k, m] = arr;
let count = 0;
let result;

if (k >= m) {
    const getDetails = (alloy) => {
        let mAmt = Math.floor(alloy / k) * Math.floor(k / m);

        count = count + mAmt;
        let remainder = alloy - mAmt * m;

        if (remainder / k >= 1) return getDetails(remainder)
        return count;
    }

    result = getDetails(n);
} else result = 0;

fs.writeFileSync("output.txt", result.toString());