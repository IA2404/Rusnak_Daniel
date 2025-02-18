/**
 * Класс, представляющий предмет.
 */
class Item {
    /**
     * Создает новый объект Item.
     * @param {string} name - Название предмета.
     * @param {number} weight - Вес предмета.
     * @param {string} rarity - Редкость предмета (может быть "common", "uncommon", "rare" или "legendary").
     */
    constructor(name, weight, rarity) {
        this.name = name;
        this.weight = weight;

        // Проверка редкости предмета
        const validRarities = ["common", "uncommon", "rare", "legendary"];
        if (!validRarities.includes(rarity)) {
            this.rarity = "no such rarity";
        } else {
             this.rarity = rarity;
         }

        this.rarity = rarity;
    };

    /**
     * Выводит информацию о предмете.
     */
    getInfo() {
        return `name: ${this.name}\nweight: ${this.weight}\nrarity: ${this.rarity}\n`
    };

    /**
     * обновляет вес предмета 
     * @param {number} newWeight - новый вес предмета.
     */
    setWeight(newWeight){
        this.weight = newWeight;
    };
}
const sword = new Item("Steel Sword", 3.5, "rare");
console.log(sword.getInfo());
sword.setWeight(4.0);
console.log(sword.getInfo());





/**
 * Класс, представляющий оружие, наследующий от класса Item.
 */
class Weapon extends Item {
    /**
     * Создает объект оружия.
     * @param {string} name - Название оружия.
     * @param {number} weight - Вес оружия.
     * @param {string} rarity - Редкость оружия (например, "common", "uncommon", "rare", "legendary").
     * @param {number} damage - Урон оружия.
     * @param {number} durability - Прочность оружия (от 0 до 100).
     */
    constructor(name, weight, rarity, damage, durability) {
        super(name, weight, rarity); // Вызов конструктора родительского класса
        this.damage = damage;

        // Проверка прочности
        if (durability >= 0 && durability <= 100) {
            this.durability = durability;
        } else {
            return "no such durability";
        }
    }

    /**
     * Получает информацию о оружии.
     * @returns {string} Строка с описанием оружия (название, вес, редкость, урон, прочность).
     */
    getInfo() {
        return `name: ${this.name}\nweight: ${this.weight}\nrarity: ${this.rarity}\ndamage: ${this.damage}\ndurability: ${this.durability}\n`;
    }

    /**
     * Использует оружие, снижая прочность на 10.
     * Прочность не может стать меньше 0.
     */
    use() {
        if (this.durability > 0) {
            this.durability -= 10;
        }
    }

    /**
     * Ремонтирует оружие, восстанавливая прочность до 100.
     */
    repair() {
        if (typeof this.durability === "number") {
            this.durability = 100;
        }
    }
}


const bow = new Weapon("Longbow", 2.0, "uncommon", 15, 99);
console.log(bow.getInfo());
bow.use();
console.log(bow.durability); // должно уменьшиться
bow.repair();
















