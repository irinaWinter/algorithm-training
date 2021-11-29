//let [a, b, c, d] = [10, 2, 2, 10]
//let [a, b, c, d] = [5, 7, 3, 2] // 5 9
//let [a, b, c, d] = [1, 1, 2, 5] // 5 9
let [a, b, c, d] = [1, 2, 1, 3] // 5 9

const getResult = () => {
    [a, b] = [a, b].sort((a, b) => a - b);

    [c, d] = [c, d].sort((c, d) => c - d);

    [[a, b], [c, d]] = d > b ? [[a, b], [c, d]] : [[c, d], [a, b]];

    if (b <= c) {
        return `${c} ${d + a}`
    }

    if (b === d) {
        return `${a + c} ${d}`
    }

    if (b === d) {
        return `${a + c} ${d}`
    }

    return `${c} ${b + d}`
}

const x = getResult();
console.log(x);