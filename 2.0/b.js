const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");
const numbers = fileContent.toString().trim().split(' ').map(item => +item);

const uniqueNumbers = {};
let result = [];

for (let number of numbers) {
    console.log(number)
    if (!uniqueNumbers[number]) {
        uniqueNumbers[number] = number
        result.push('NO')
    } else {
        result.push('YES')
    }
}

fs.writeFileSync("output.txt", result.join('\n'));