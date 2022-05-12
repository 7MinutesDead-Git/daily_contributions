// https://www.codewars.com/kata/5264603df227072e6500006d/train/javascript
class Jar {
    constructor() {
        this.concentrate = {}
        this.total = 0
    }
    add(amount, type) {
        if (this.concentrate[type]) {
            this.concentrate[type] += amount
        } else {
            this.concentrate[type] = amount
        }
        this.total += amount
    }
    pourOut(amount) {
        const lossRatio = (this.total - amount) / this.total
        this.total -= amount
        for (const juice in this.concentrate) {
            this.concentrate[juice] *= lossRatio
        }
    }
    getTotalAmount() {
        return this.total
    }
    getConcentration(type) {
        if (this.concentrate[type]) {
            return this.concentrate[type] / this.total
        } else {
            return 0
        }
    }
}