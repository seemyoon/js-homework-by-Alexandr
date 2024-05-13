// TASK.PDF IS LOCATED IN THE ADDITIONALTASK FOLDER
function userCard(number) {
    const card = [{
        balance: 100,
        transactionLimit: 100,
        historyLogs: [{
            operationType: "Received credits",
            credits: 100,
            operationTime: "14/02/2019, 17:59:33"
        }, {
            operationType: "Withdrawal of credits",
            credits: 50,
            operationTime: "14/02/2019, 17:59:44"
        }, {operationType: "Transaction limit change", credits: 200, operationTime: "14/02/2019, 17:59:59"}],
        key: "card" + number
    }, {
        balance: 300,
        transactionLimit: 200,
        historyLogs: [{
            operationType: "Withdrawal of credits",
            credits: 150,
            operationTime: "15/02/2019, 18:59:33"
        }, {
            operationType: "Received credits",
            credits: 75,
            operationTime: "15/02/2019, 18:59:44"
        }, {operationType: "Transaction limit change", credits: 250, operationTime: "15/02/2019, 18:59:59"}],
        key: "card" + number
    }, {
        balance: 200,
        transactionLimit: 150,
        historyLogs: [{
            operationType: "Received credits",
            credits: 200,
            operationTime: "16/02/2019, 20:59:33"
        }, {
            operationType: "Withdrawal of credits",
            credits: 175,
            operationTime: "16/02/2019, 20:59:44"
        }, {operationType: "Transaction limit change", credits: 290, operationTime: "16/02/2019, 20:59:59"}],
        key: "card" + number
    }]
    return {
        getCardOptions: () => {
            return JSON.parse(JSON.stringify(card[number - 1]))
        }, putCredits: (cardReplenishment) => {
            if (typeof cardReplenishment === "number" && cardReplenishment > 0) {
                let resultPutCredits = card[number - 1].balance += cardReplenishment
                return card[number - 1].historyLogs.push({
                    operationType: "Received credits",
                    credits: resultPutCredits,
                    operationTime: "14/02/2019, 21:49:44"
                }) // I prefer to use the push method
            } else {
                return "Error"
            }
        }, takeCredits: (cashWithdrawal) => {
            if (typeof cashWithdrawal === "number" && cashWithdrawal > 0 && card[number - 1].balance > cashWithdrawal
                && card[number - 1].transactionLimit > cashWithdrawal) {
                let resultTakeCredits = card[number - 1].balance -= cashWithdrawal
                return card[number - 1].historyLogs.push({
                    operationType: "Withdrawal of credits",
                    credits: resultTakeCredits,
                    operationTime: "14/02/2019, 21:49:44"
                })
            } else {
                return console.error("Exceeding the limit")
            }
        }, setTransactionLimit: (changeLimits) => {
            if (typeof changeLimits === "number" && changeLimits > 0) {
                let resultSetTransactionLimit = card[number - 1].transactionLimit = changeLimits
                return card[number - 1].historyLogs.push({
                    operationType: "Transaction limit change",
                    credits: resultSetTransactionLimit,
                    operationTime: "14/02/2019, 21:49:44"
                })
            } else {
                return "Error"
            }
        }, transferCredits: (credits, numberAnotherCard) => {
            if (typeof numberAnotherCard.getCardOptions().balance === "number" && credits < card[number - 1].balance
                && card[number - 1].transactionLimit >= credits && card[number - 1].balance - credits > 0) {
                let tax = credits * 0.5;
                let creditWithTax = card[number - 1].balance -= credits + tax;
                let updWallet = numberAnotherCard.putCredits(credits)
                return {creditWithTax, updWallet}
            } else {
                console.log("Error transferring credits")
            }

        }
    }
}

const card = userCard(1)
console.log(card.getCardOptions())
console.log(card.putCredits(233))
console.log(card.takeCredits(91))
console.log(card.setTransactionLimit(5000))

const card2 = userCard(2);
console.log(card.getCardOptions());
console.log(card2.getCardOptions().balance);

console.log(card.transferCredits(20, card2))
console.log(card2.getCardOptions().balance);
console.log(card.getCardOptions().balance)
console.log(card.getCardOptions().historyLogs)
