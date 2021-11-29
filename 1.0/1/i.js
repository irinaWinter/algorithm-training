const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", "utf8");

const arr = fileContent.toString().trim().split('\n').map(item => +item);

let [a, b, c, d, e] = arr;
[a, b, c] = [a, b, c].sort((a, b) => b - a);
[d, e] = [d, e].sort((a, b) => b - a);

let result = (d >= b && e >= c) ? 'YES' : 'NO';

fs.writeFileSync("output.txt", result.toString());