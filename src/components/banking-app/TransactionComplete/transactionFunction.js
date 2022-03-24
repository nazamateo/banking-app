function getInfo(bankAccounts, transactionId) {
  const transactionHistory = bankAccounts
    .map(account => account.transactionHistory)
    .flat();

  const specificTransaction = transactionHistory.filter(
    transaction => transaction.transactionId === transactionId
  );

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
