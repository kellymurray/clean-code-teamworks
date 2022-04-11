function processTransactions(transactions) { // this processes transactions
  if (transactions && transactions.length > 0) {
    for (const transaction of transactions) {
      if (transaction.type === 'PAYMENT') {
        if (transaction.status === 'OPEN') {
          if (transaction.method === 'CREDIT_CARD') {
            processCreditCardPayment(transaction);
          } else if (transaction.method === 'PAYPAL') { // this is for cash transactions
            processPayPalPayment(transaction);
          } else if (transaction.method === 'PLAN') {
            processPlanPayment(transaction);
          }
        } else {
          console.log('Invalid transaction type!'); 
        }
      } else if (transaction.type === 'REFUND') { // does the thing for refunds
        if (transaction.status === 'OPEN') {
          if (transaction.method === 'CREDIT_CARD') {
            processCreditCardRefund(transaction);
          } else if (transaction.method === 'PAYPAL') {
            processPayPalRefund(transaction);
          } else if (transaction.method === 'PLAN') {
            processPlanRefund(transaction);
          }
        } else {
          console.log('Invalid transaction type!', transaction);
        }
      } else {
        console.log('Invalid transaction type!', transaction);
      }
    }
  } else {
    console.log('No transactions provided!');
  }
}
