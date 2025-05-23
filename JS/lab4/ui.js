import { transactions } from './transactions.js';

const table = document.getElementById('transactions-table').querySelector('tbody');
const totalEl = document.getElementById('total');
const fullDesc = document.getElementById('full-description');

/** Отрисовка одной строки таблицы */
export function renderTransaction(tx) {
  const row = document.createElement('tr');
  row.dataset.id = tx.id;
  row.style.backgroundColor = tx.amount > 0 ? '#c8f7c5' : '#f7c5c5';

  row.innerHTML = `
    <td>${tx.date}</td>
    <td>${tx.category}</td>
    <td>${tx.description.split(' ').slice(0, 4).join(' ')}...</td>
    <td><button class="delete-btn">Удалить</button></td>
  `;

  table.appendChild(row);
}

/** Удаление строки из таблицы */
export function removeTransactionRow(id) {
  const row = table.querySelector(`tr[data-id='${id}']`);
  if (row) row.remove();
}

/** Пересчет общей суммы */
export function updateTotal() {
  const total = transactions.reduce((sum, t) => sum + t.amount, 0);
  totalEl.textContent = total.toFixed(2);
}

/** Показ полного описания */
export function showFullDescription(text) {
  fullDesc.textContent = `Полное описание: ${text}`;
}
