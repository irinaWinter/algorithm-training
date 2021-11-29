//const [k1, m, k2, p2, n2] = [89, 20, 41, 1, 11] // 2 3 +
//const [k1, m, k2, p2, n2] = [11, 1, 1, 1, 1] // 0 1 +
//const [k1, m, k2, p2, n2] = [5, 20, 2, 1, 1] // 1 0 +
//const [k1, m, k2, p2, n2] = [3, 2, 2, 2, 1] // -1 -1 +
//const [k1, m, k2, p2, n2] = [11, 2, 4, 1, 2] // 0 2 +

//const [k1, m, k2, p2, n2] = [1000, 1, 449, 449, 1] // 1000 1 +

const getResult = () => {
    let p1;
    let n1;

    if (p2 === 1 && n2 === 1) {
        n1 = 0;
    }

    if (n2 === 1) {
        p1 = k1 <= m ? 1 : 0;
    }

    if (m === n2 && k2 === p2 && m !== k2) p1 = k1

    if (m === 1) n1 = 1;

    if (p1 !== undefined && n1 !== undefined) return `${p1} ${n1}`

    if (Number.isInteger(k2 / n2)) p1 = 0;

    const apartmentsPerFloor = Math.ceil(k2 / n2);
    console.log('apartmentsPerFloor', apartmentsPerFloor)
    const apartmentsInEntrance = m * apartmentsPerFloor;
    console.log('apartmentsInEntrance', apartmentsInEntrance)

    if (k2 < (p2 - 1) * apartmentsInEntrance) return `-1 -1`

    console.log('p1', p1)

    p1 = apartmentsPerFloor && p1 !== 0 && !p1 ? Math.ceil(k1 / apartmentsInEntrance) : p1;

    console.log('p1 1', p1)
    console.log('n1', n1)

    n1 = apartmentsPerFloor && n1 !== 0 && !n1 ? Math.ceil((k1 - ((Math.ceil(k1 / apartmentsInEntrance)) - 1) * apartmentsInEntrance) / apartmentsPerFloor) : n1;

    console.log('n1 1', n1)

    if (n1 >= 0) return `${p1} ${n1}`

    return `-1 -1`
}

const x = getResult();

console.log(x)