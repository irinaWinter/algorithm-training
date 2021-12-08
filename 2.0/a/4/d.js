const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");
let [s, k] = fileContent.toString().trim().split('\n');

const getNumber = (s, k) => {
    const sNumbers = new Array(10)
    sNumbers.fill(0)

    const kNumbers = new Array(10)
    kNumbers.fill(0)

    let res = ''

    const countNumbers = (numbers, count) => {
        for (let number of numbers) {
            count[+number] += 1
        }
    }

    countNumbers(s, sNumbers)
    countNumbers(k, kNumbers)

    for (let i = 9; i >= 0; i--) {
        if (sNumbers[i] && kNumbers[i]) {
            res += i.toString().repeat(Math.min(sNumbers[i], kNumbers[i]))
        }
    }

    if (res[0] === "0" && res.length > 1) res = "0"

    return res !== '' ? res : -1
}

const res = getNumber(s, k).toString();

fs.writeFileSync("output.txt", res);