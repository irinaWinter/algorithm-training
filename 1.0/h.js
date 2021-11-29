//const [a, b, n, m] = [1, 3, 3, 2] // 5 7
//const [a, b, n, m] = [3, 1, 2, 3] // 5 7
//const [a, b, n, m] = [1, 5, 1, 2] // -1
//const [a, b, n, m] = [3, 2, 7, 11] // 31 31
const [a, b, n, m] = [2, 3, 11, 7] // 31 31

const getResult = () => {
    if (a === n && b !== m || b > a && m >= n || a > b && n >= m) return '-1'

    let at = a * n + n - 1;
    let bt = b * m + m - 1;

    if (Math.abs(at - bt) > Math.abs(a - b)) {
        return at > bt ? `${at - 1} ${at - 1}` : `${bt - 1} ${bt - 1}`;
    }

    return at < bt ? `${at} ${bt}` : `${bt} ${at}`;
}

const x = getResult();

console.log(x)