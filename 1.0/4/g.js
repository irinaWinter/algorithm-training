const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");
let str = fileContent.toString().trim().split('\n').map(item => item.split(' '));

const getResult = (str) => {
    const accounts = {}
    let log = ''

    const checkAccount = (name) => {
        if (accounts[name] === undefined) {
            accounts[name] = 0
        }
    }

    const updateLog = (name) => {
        if (accounts[name] === undefined) {
            log += `ERROR \n`
        } else {
            log += `${accounts[name]} \n`
        }
    }

    const deposite = (name, sum) => {
        accounts[name] += +sum
    }

    const withdraw = (name, sum) => {
        accounts[name] -= +sum
    }

    const income = (p) => {
        for (let account of Object.keys(accounts)) {
            if (accounts[account] >= 1) {
                accounts[account] += Math.trunc(accounts[account] * +p / 100)
            }
        }
    }

    for (let operation of str) {
        if (operation[0] === 'DEPOSIT' || operation[0] === 'WITHDRAW') {
            checkAccount(operation[1])

            operation[0] === 'DEPOSIT'
                ? deposite(operation[1], operation[2])
                : withdraw(operation[1], operation[2])

        } else if (operation[0] === 'TRANSFER') {
            checkAccount(operation[1])
            checkAccount(operation[2])

            withdraw(operation[1], operation[3])
            deposite(operation[2], operation[3])

        } else if (operation[0] === 'BALANCE') {
            updateLog(operation[1])

        } else if (operation[0] === 'INCOME') {
            income(operation[1])
        }
    }

    return log.trim()
}

const res = getResult(str)

fs.writeFileSync("output.txt", res);