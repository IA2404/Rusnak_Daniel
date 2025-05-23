export const transactions = [];

/** Добавление транзакции в массив */
export function addTransactionToArray(transaction) {
  transactions.push(transaction);
}

/** Удаление транзакции по ID */
export function removeTransactionFromArray(id) {
  const index = transactions.findIndex(t => t.id === id);
  if (index !== -1) transactions.splice(index, 1);
}
