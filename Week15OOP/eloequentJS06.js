// ----------------------------------------------------------
// https://eloquentjavascript.net/06_object.html#i_zO8FRQBMAy
// A Vector Type.
class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  plus(vectorToAdd) {
    return new Vector(this.x + vectorToAdd.x, this.y + vectorToAdd.y)
  }
  minus(vectorToSubtract) {
    return new Vector(this.x - vectorToSubtract.x, this.y - vectorToSubtract.y)
  }
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }
}

// ----------------------------------------------------------
// https://eloquentjavascript.net/06_object.html#i_rpYp9Ou4LG
// Groups.
class Group {
    // A means of creating a set of sorts.
    constructor() {
        this.group = {}
    }
    // Add elements to the group.
    static from(array) {
        const group = new Group()
        for (const item of array) {
            group.add(item)
        }
        return group
    }
    // Check of the element exists as a key in the group object.
    has(element) {
        for (const item in this.group) {
            if (item === element.toString()) {
                return true
            }
        }
        return false
    }
    // Add a new element to the group as a key.
    add(element) {
        this.group[element] = true
    }
    // Remove an existing element from the group.
    delete(element) {
        if (this.has(element.toString()))
            delete this.group[element.toString()]
    }
}

const group = Group.from([10, 20])
console.log(group.has(10))
// → true
console.log(group.has(30))
// → false
group.add(10)
group.delete(10)
console.log(group.has(10))
// → false

// ----------------------------------------------------------
// https://eloquentjavascript.net/06_object.html#i_djD3XDJ27V
// Iterable groups.
