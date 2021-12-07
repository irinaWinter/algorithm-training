const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");
const str = fileContent.toString().trim();

const getReps = (str) => {
    const dct = {}
    let res = ''
    let word = ''

    const addWord = () => {
        if (word) {
            if (dct[word] === undefined) {
                dct[word] = -1
            }
            dct[word] += 1
            res += ` ${dct[word]}`
            word = ''
        }
    }

    for (let sym of str) {
        if (sym === ' ' || sym === '\n') {
            addWord(word)
        } else {
            word += sym
        }
    }

    addWord()

    return res.trim();
}

let result = getReps(str);

fs.writeFileSync("output.txt", result);