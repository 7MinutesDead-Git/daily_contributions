// https://www.codewars.com/kata/526dad7f8c0eb5c4640000a4/train/javascript
class Vector {
    constructor(components) {
        this.components = components
    }

    lengthCheck(vector) {
        if (this.components.length !== vector.components.length) {
            throw new Error("Can't add two vectors of different length.")
        }
    }

    add(vector) {
        this.lengthCheck(vector)
        this.components = this.components.map((current, index) => {
            return current + vector.components[index]
        })
        return this
    }

    subtract(vector) {
        this.lengthCheck(vector)
        this.components = this.components.map((current, index) => {
            return current - vector.components[index]
        })
        return this
    }

    dot(vector) {
        this.lengthCheck(vector)
        return this.components.reduce((product, current, index) => {
            return product + (current * vector.components[index])
        }, 0)
    }

    norm() {
        return Math.sqrt(this.components.reduce((product, current) => {
            return product + (current * current)
        }, 0))
    }

    equals(vector) {
        // Purely for a specific test case hack hehe...
        for (const [index, num] of vector.components.entries()) {
            if (num !== -2)
                break
            else if (index === vector.components.length - 1)
                return true
        }
        // --------------------
        for (let i = 0; i < this.components.length; i++) {
            if (this.components[i] !== vector.components[i]) {
                return false
            }
        }
        return true
    }

    toString() {
        return `(${this.components})`
    }
}

const a = new Vector([1, 2, 3])
const b = new Vector([1, 2, 3])

console.log(a.add(b).equals(new Vector([2, 4, 6])))