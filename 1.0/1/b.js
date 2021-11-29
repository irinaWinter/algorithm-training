const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");
const lines = fileContent.toString().trim().split('\n').map(item => +item);
const [a, b, c] = lines

let result = a + b > c &&
    a + c > b &&
    b + c > a ? "YES" : "NO";

fs.writeFileSync("output.txt", result.toString());