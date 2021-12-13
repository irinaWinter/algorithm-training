const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");
const [a, ...str] = fileContent.toString().trim().split('\n');

const union = (setA, setB) => {
    for (let elem of setB) {
        setA.add(elem);
    }
    return setA;
}

const intersection = (setA, setB) => {
    const _intersection = new Set();

    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem);
        }
    }

    return _intersection;
}

const getPupils = () => {
    let pupils = [];

    for (let item of str) {
        if (!Number.isNaN(+item)) {
            pupils.push(new Set())
        } else {
            pupils[pupils.length - 1].add(item)
        }
    }

    return pupils
}

const formatResult = (allLanguages, commonLanguages) => {
    let res = `${commonLanguages.size}\n`

    for (let item of commonLanguages) {
        res += `${item}\n`
    }

    res += `${allLanguages.size}\n`

    for (let item of allLanguages) {
        res += `${item}\n`
    }

    return res.trim();
}

const getResult = (str) => {
    let pupils = getPupils();

    let allLanguages = pupils[0];
    let commonLanguages = pupils[0];

    for (let item of pupils) {
        allLanguages = union(allLanguages, item)
        commonLanguages = intersection(commonLanguages, item)
    }

    return formatResult(allLanguages, commonLanguages);
}

const result = getResult(str);

fs.writeFileSync("output.txt", result);