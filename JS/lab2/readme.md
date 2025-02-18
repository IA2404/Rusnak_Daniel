
### Отчет о функциях обработки транзакций

#### 1. getUniqueTransactionTypes
**Описание:** Возвращает массив уникальных типов транзакций.
**Пример вызова:** `getUniqueTransactionTypes(transactions);`
**Вывод:** `['debit', 'credit']`

#### 2. calculateTotalAmount
**Описание:** Вычисляет сумму всех транзакций.
**Пример вызова:** `calculateTotalAmount(transactions);`
**Вывод:** `1000`

#### 3. calculateTotalAmountByDate
**Описание:** Вычисляет общую сумму транзакций за указанный год, месяц и день.
**Пример вызова:** `calculateTotalAmountByDate(transactions, 2019, 3, 29);`
**Вывод:** `500`

#### 4. getTransactionByType
**Описание:** Фильтрует транзакции по заданному типу.
**Пример вызова:** `getTransactionByType(transactions, 'debit');`
**Вывод:** `[{...}, {...}]`

#### 5. getTransactionsInDateRange
**Описание:** Возвращает массив транзакций, проведенных в указанном диапазоне дат.
**Пример вызова:** `getTransactionsInDateRange(transactions, '2019-01-26', '2019-04-30');`
**Вывод:** `[{...}, {...}]`

#### 6. getTransactionsByMerchant
**Описание:** Возвращает массив транзакций, совершенных с указанным продавцом.
**Пример вызова:** `getTransactionsByMerchant(transactions, 'OfficeSupplyStoreABC');`
**Вывод:** `[{...}]`

#### 7. calculateAverageTransactionAmount
**Описание:** Вычисляет среднее значение транзакций.
**Пример вызова:** `calculateAverageTransactionAmount(transactions);`
**Вывод:** `50`

#### 8. getTransactionsByAmountRange
**Описание:** Возвращает массив транзакций с суммой в заданном диапазоне.
**Пример вызова:** `getTransactionsByAmountRange(transactions, 70, 100);`
**Вывод:** `[{...}, {...}]`

#### 9. calculateTotalDebitAmount
**Описание:** Вычисляет общую сумму дебетовых транзакций.
**Пример вызова:** `calculateTotalDebitAmount(transactions);`
**Вывод:** `600`

#### 10. findMostTransactionsMonth
**Описание:** Возвращает месяц, в котором было больше всего транзакций.
**Пример вызова:** `findMostTransactionsMonth(transactions);`
**Вывод:** `3 (март)`

#### 11. findMostDebitTransactionMonth
**Описание:** Возвращает месяц, в котором было больше дебетовых транзакций.
**Пример вызова:** `findMostDebitTransactionMonth(transactions);`
**Вывод:** `2 (февраль)`

#### 12. mostTransactionTypes
**Описание:** Определяет, каких транзакций больше всего.
**Пример вызова:** `mostTransactionTypes(transactions);`
**Вывод:** `'debit'`

#### 13. getTransactionsBeforeDate
**Описание:** Возвращает массив транзакций, совершенных до указанной даты.
**Пример вызова:** `getTransactionsBeforeDate(transactions, '2019-04-30');`
**Вывод:** `[{...}, {...}]`

#### 14. findTransactionById
**Описание:** Ищет транзакцию по ее уникальному идентификатору.
**Пример вызова:** `findTransactionById(transactions, 100);`
**Вывод:** `{...}`

#### 15. mapTransactionDescriptions
**Описание:** Возвращает массив описаний транзакций.
**Пример вызова:** `mapTransactionDescriptions(transactions);`
**Вывод:** `['Покупка в магазине', 'Снятие наличных']`


![image](https://github.com/user-attachments/assets/d94a8154-79c1-448e-9d2d-3fa796e6742b)
![image](https://github.com/user-attachments/assets/d97eba13-f4a3-4aff-a835-44f178c8d354)


![image](https://github.com/user-attachments/assets/7605a979-9628-4d3c-9111-a33e92575372)


![image](https://github.com/user-attachments/assets/1d3c8e9a-4000-4d38-80a8-a322211c5929)


