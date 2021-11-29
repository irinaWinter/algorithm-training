let [a, b, c, d, e, f] = [1, 1, 2, 2, 1, 2] // 1, -1, 1

const getResult = () => {
    let x;
    let y;
    let exitCode;

    console.log(`${a * x + b * y} = ${e}`)
    console.log(`${c * x + d * y} = ${f}`)

    if (!b && !c || !a && !d) {
        x = e / a;
        y = f / d;
        exitCode = 2;
    }

    // выразить одну переменную через другую

    return (`${exitCode} ${x} ${y}`)
}

const x = getResult();
console.log(x);