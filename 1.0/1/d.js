const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");
const lines = fileContent.toString().trim().split('\n').map(item => +item);
const [a, b, c] = lines

const getResult = () => {
    let x;

    if (c >= 0 && a !== 0) {
        x = (c * c - b) / a
    } else if (a === 0 && b === c * c) {
        return "MANY SOLUTIONS"
    } else if (c === 0) {
        x = b > 0 ? -b / a : b / a;
    } else {
        return "NO SOLUTION"
    }

    if (!Number.isInteger(x)) return "NO SOLUTION"

    return x
}

const x = getResult();

fs.writeFileSync("output.txt", x.toString());