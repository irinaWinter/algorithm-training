const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let lines = [];
rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    let [temp, mode] = lines
    temp = temp.split(' ').map(item => Number(item));
    let result = 0;
    if (mode === "freeze") {
        if (temp[0] > temp[1]) {
            result = temp[1]
        } else {
            result = temp[0]
        }
    } else if (mode === "heat") {
        if (temp[0] < temp[1]) {
            result = temp[1]
        } else {
            result = temp[0]
        }
    } else if (mode === "auto") {
        result = temp[1]
    } else {
        result = temp[0]
    }

    process.stdout.write(result.toString());
});
