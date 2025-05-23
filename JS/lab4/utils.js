/** Генерация уникального ID */
export function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
  
  /** Форматирование даты */
  export function formatDate(date) {
    return date.toLocaleString('ru-RU');
  }