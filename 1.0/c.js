const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let lines = [];
rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    let numbers = lines

    let result = [];

    numbers = numbers.map((item, i) => {
        item = item.toString().split('');

        item = item.filter(str => Number.isInteger(+str))

        if (item.length < 11) {
            item = '495' + item.join('')
        } else {
            item = item.join('')
            item = item.slice(1)
        }

        return item
    })

    numbers.forEach((number, i) => {
        if (i !== 0) {
            number == numbers[0] ? result.push('YES') : result.push('NO')
        }
    })

    result = result.join('\n')

    process.stdout.write(result);
});