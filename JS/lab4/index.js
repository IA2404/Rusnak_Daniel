import { transactions, addTransactionToArray, removeTransactionFromArray } from './transactions.js';
import { renderTransaction, removeTransactionRow, updateTotal, showFullDescription } from './ui.js';
import { generateId, formatDate } from './utils.js';
console.log("Файл index.js загружен");

const form = document.getElementById('transaction-form');
const table = document.getElementById('transactions-table').querySelector('tbody');

// Обработка добавления транзакции
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const amount = parseFloat(document.getElementById('amount').value);
  const category = document.getElementById('category').value;
  const description = document.getElementById('description').value.trim();

  if (!description || isNaN(amount) || amount === 0) return;

  const transaction = {
    id: generateId(),
    date: formatDate(new Date()),
    amount,
    category,
    description
  };

  addTransactionToArray(transaction);
  renderTransaction(transaction);
  updateTotal();
  form.reset();
});

// Удаление транзакции по клику на кнопку
table.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const id = e.target.closest('tr').dataset.id;
    removeTransactionFromArray(id);
    removeTransactionRow(id);
    updateTotal();
  }
});

// Отображение полного описания
table.addEventListener('click', (e) => {
  const row = e.target.closest('tr');
  if (row && row.dataset.id && !e.target.classList.contains('delete-btn')) {
    const tx = transactions.find(t => t.id === row.dataset.id);
    showFullDescription(tx.description);
  }
});
