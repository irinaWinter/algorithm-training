const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");
let [topLength, topColors, bottomLength, bottomColors] = fileContent.toString().trim().split('\n');
topColors = topColors.split(' ').map(Number)
bottomColors = bottomColors.split(' ').map(Number)

const getResult = () => {
    let top = topColors[0]
    let bottom = bottomColors[0]
    const length = +topLength + +bottomLength
    let pointerTop = 0;
    let pointerBottom = 0;

    for (let i = 0; i < length; i++) {
        if (top === bottom) return `${top} ${bottom}`

        if (Math.abs(topColors[pointerTop] - bottomColors[pointerBottom]) < Math.abs(top - bottom)) {
            top = topColors[pointerTop]
            bottom = bottomColors[pointerBottom]
        }

        if (topColors[pointerTop] < bottomColors[pointerBottom]) {
            if (pointerTop < topLength) pointerTop += 1
        } else {
            if (pointerBottom < bottomLength) pointerBottom += 1
        }
    }

    return `${top} ${bottom}`
}

const res = getResult();

fs.writeFileSync("output.txt", res);