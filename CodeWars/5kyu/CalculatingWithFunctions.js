// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript
function expression(num, op) {
    if (!op) {
        console.log(num)
        return num
    }
    console.log(op, num)
    return op(num)
}

function zero(op) {
    return expression(0, op)
}
function one(op) {
    return expression(1, op)
}
function two(op) {
    return expression(2, op)
}
function three(op) {
    return expression(3, op)
}
function four(op) {
    return expression(4, op)
}
function five(op) {
    return expression(5, op)
}
function six(op) {
    return expression(6, op)
}
function seven(op) {
    return expression(7, op)
}
function eight(op) {
    return expression(8, op)
}
function nine(op) {
    return expression(9, op)
}

function plus(a) {
    return b => {
        return b + a
    }
}
function minus(a) {
    return b => {
        return b - a
    }
}
function times(a) {
    return b => {
        return b * a
    }
}
function dividedBy(a) {
    return b => {
        return Math.floor(b / a)
    }
}