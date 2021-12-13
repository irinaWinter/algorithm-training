const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");
let [daysAndParties, ...schedule] = fileContent.toString().trim().split('\n');
const [lengthOfYear, numberOfParties] = daysAndParties.split(' ');
schedule = schedule.map(item => item.split(' '))

const getWeekend = () => {
    const weekend = new Set()

    for (let i = 6; i <= lengthOfYear; i += 7) {
        weekend.add(i)
    }

    for (let i = 7; i <= lengthOfYear; i += 7) {
        weekend.add(i)
    }

    return weekend;
}

const countStrikes = (schedule) => {
    const strikes = new Set();
    const weekend = getWeekend();

    for (let item of schedule) {
        for (let a = +item[0]; a <= +lengthOfYear; a += +item[1]) {
            strikes.add(a)
        }
    }

    for (let day of weekend) {
        if (strikes.has(day)) strikes.delete(day)
    }

    return strikes.size
}

const result = countStrikes(schedule).toString();

fs.writeFileSync("output.txt", result);