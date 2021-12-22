const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");
let [line, distance] = fileContent.toString().trim().split('\n');
let [cntMonuments, criticalDistance] = line.split(' ').map(Number)
distance = distance.split(' ').map(Number)

const getNumberOfWays = () => {
    let count = 0;
    let pointerFirst = 0;
    let pointerSecond = 0;

    for (let i = 0; i < cntMonuments * 2; i++) {
        if (distance[pointerSecond] - distance[pointerFirst] > criticalDistance) {
            count += 1 + cntMonuments - 1 - pointerSecond
            if (pointerFirst < cntMonuments) pointerFirst += 1
        } else {
            if (pointerSecond < cntMonuments) pointerSecond += 1
        }
    }

    return count
}

const res = getNumberOfWays().toString();

fs.writeFileSync("output.txt", res);