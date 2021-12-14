const getAnswer = (str) => {
    str = str.toString().trim().split('\n')

    const number = +str[0]
    let res = ''

    let possible = new Set();
    for (let i = 1; i <= number; i++) possible.add(i)

    for (let i = 1; i < str.length - 1; i++) {
        let beatrice = new Set(str[i].split(' ').map(Number).filter(item => possible.has(item)))

        if (beatrice.size * 2 > possible.size) {
            res += 'YES\n'
            possible = beatrice;

        } else {
            res += 'NO\n'

            for (let item of beatrice) {
                possible.delete(item)
            }
        }
    }

    return res + [...possible].join(' ')
}

const fs = require('fs');
let str = fs.readFileSync("input.txt", "utf8");
const result = getAnswer(str);
fs.writeFileSync("output.txt", result);