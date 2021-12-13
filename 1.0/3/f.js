const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");
const genomes = fileContent.toString().trim().split('\n');

const determineDegreeOfProximityOfGenomes = (genomes) => {
    let [firstGenom, secondGenom] = genomes;

    const basePairs = new Set();
    let count = 0;

    for (let i = 0; i < secondGenom.length - 1; i++) {
        let basePair = `${secondGenom[i]}${secondGenom[i + 1]}`;

        if (!basePairs.has(basePair)) {
            basePairs.add(basePair)
        }
    }

    for (let i = 0; i < firstGenom.length - 1; i++) {
        let basePair = `${firstGenom[i]}${firstGenom[i + 1]}`;

        if (basePairs.has(basePair)) count++;
    }

    return count;
}


let result = determineDegreeOfProximityOfGenomes(genomes);

fs.writeFileSync("output.txt", result.toString());