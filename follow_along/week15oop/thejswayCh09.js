// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter09.md#dogs
class Dog {
    constructor(name, breed, size) {
        this.name = name
        this.breed = breed
        this.size = size
    }
    bark() {
        return "Bark."
    }
}

const fang = new Dog("Fang", "boarhound", 75)
console.log(`${fang.name} is a ${fang.breed} dog measuring ${fang.size}`)
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`)

const snowy = new Dog("Snowy", "terrier", 22)
console.log(`${snowy.name} is a ${snowy.breed} dog measuring ${snowy.size}`)
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`)


// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter09.md#character-inventory
class Inventory {
    constructor(gold, ...keyItems) {
        this.gold = gold
        this.keyItems = keyItems
    }
    addGold(amount) {
        this.gold += amount
    }
    spendGold(amount) {
        if (this.gold >= amount) {
            this.gold -= amount
        } else {
            console.log("You don't have enough gold.")
        }
    }
    addKeyItems(...items) {
        this.keyItems.concat(items)
    }
    useKey(key) {
        this.keyItems = this.keyItems.filter(k => k !== key)
    }
}

class Character {
    constructor(name, health, strength) {
        this.name = name
        this.health = health
        this.strength = strength
        this.xp = 0
        this.inventory = new Inventory(10, "Spirit Calling Bell")
    }

    // Attack a target.
    attack(target) {
        if (this.health > 0) {
            const damage = this.strength
            target.health -= damage
            console.log(`${this.name} attacks ${target.name} and causes ${damage} damage points`)

            if (target.health > 0) {
                console.log(`${target.name} has ${target.health} health points left`)
            } else {
                target.health = 0
                const bonusXP = 10
                this.inventory.addGold(target.inventory.gold)
                this.inventory.addKeyItems(target.inventory.keyItems)
                console.log(`${this.name} eliminated ${target.name} and wins ${bonusXP} experience points`)
                this.xp += bonusXP
            }
        } else {
            console.log(`${this.name} can't attack (they've been eliminated).`)
        }
    }
    // Return the character description.
    describe() {
        console.log(`${this.name} has ${this.health} health points, ${this.strength} STR and ${this.xp} XP.`)
        console.log(`${this.inventory.keyItems.length} key items and ${this.inventory.gold} gold present.`)
    }
}

const aurora = new Character("Aurora", 150, 25)
const glacius = new Character("Glacius", 130, 35)
const spike = new Character("Spike", 50, 20)

aurora.describe()
glacius.describe()
spike.describe()

spike.attack(aurora)
spike.attack(glacius)

aurora.attack(spike)
glacius.attack(spike)

aurora.describe()
glacius.describe()

// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter09.md#account-list
class Account {
    constructor(name, balance) {
        this.name = name
        this.balance = balance
    }
    credit(amount) {
        this.balance += amount
    }
    describe() {
        console.log(`${this.name} has ${this.balance} in the bank.`)
    }
}

class Bank {
    constructor(accounts) {
        this.accounts = accounts
    }
    describe() {
        this.accounts.forEach(account => account.describe())
    }
    depositBonuses(bonus) {
        this.accounts.forEach(account => account.credit(bonus))
    }
}

const sean = new Account("Sean", 0)
const brad = new Account("Brad", 50)
const georges = new Account("Georges", 30)

const accounts = [sean, brad, georges]
const bank = new Bank(accounts)

bank.describe()
bank.depositBonuses(1000)
bank.describe()