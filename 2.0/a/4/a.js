const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");
let [length, str] = fileContent.toString().trim().split('\n');

const getPalindrome = (str) => {
    const dct = {}
    let left = ''
    let center = ''
    let right = ''

    for (let sym of str) {
        if (!dct[sym]) dct[sym] = 0
        dct[sym] += 1
    }

    for (let sym of Object.keys(dct).sort()) {
        const length = Math.trunc(dct[sym] / 2)

        left += sym.repeat(length)
        right = sym.repeat(length) + right

        if (!center && dct[sym] % 2) {
            center = sym
        }
    }

    return `${left}${center}${right}`
}

const res = getPalindrome(str)

fs.writeFileSync("output.txt", res);