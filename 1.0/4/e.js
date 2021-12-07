const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");
let [n, ...blocks] = fileContent.toString().trim().split('\n');
blocks = blocks.map(item => item.split(' '))

const getMaxHeightPyramid = (blocks) => {
    const dct = {}

    for (let block of blocks) {
        if (!dct[block[0]]) {
            dct[block[0]] = +block[1]
        } else {
            dct[block[0]] = Math.max(dct[block[0]], +block[1])
        }
    }

    let res = 0;

    for (let block of Object.keys(dct)) {
        res += dct[block]
    }

    return res;
}

let result = getMaxHeightPyramid(blocks);

fs.writeFileSync("output.txt", result.toString());