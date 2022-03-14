import { getBankAccounts } from "../../components/LocalStorage/LocalStorage";

function getInfo(transactionId) {
  //Helper
  const bankAccounts = getBankAccounts(); //[{...}, {...}]

  //in each bank account, get the transactionHistory array of each and return a value that will obtain the array of transactionHistory
  const transactionHistory = bankAccounts
    .map(account => account.transactionHistory)
    .flat();

  const specificTransaction = transactionHistory.filter(
    transaction => transaction.transactionId === transactionId
  );
  //ang laman ng array na to is yung may matching transactionId lang.

  //get the data from the array na specificTransaction

  if (specificTransaction.length === 1) {
    return specificTransaction[0];
  } else {
    const [transactionOne, transactionTwo] = specificTransaction;
    const senderInfo = transactionOne.hasOwnProperty("sender")
      ? transactionTwo
      : transactionOne;

    const receiverInfo = specificTransaction[0].hasOwnProperty("sender")
      ? transactionOne
      : transactionTwo;

    return {
      sender: senderInfo,
      receiver: receiverInfo,
      action: "transfer",
    };
  }
}

export default getInfo;
