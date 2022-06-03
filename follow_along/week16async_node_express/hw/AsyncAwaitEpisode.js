// https://www.youtube.com/watch?v=vn3tm0quoqE
async function getFruit(name) {
    const fruits = {
        pineapple: "🍍",
        apple: "🍎",
        banana: "🍌",
    }
    return fruits[name]
    // If you didn't use async, you could still do the following manually:
    // return Promise.resolve(fruits[name])
    // However, using async also sets up the context for you to use the await key too.
}

async function makeSmoothie() {
    const a = getFruit("pineapple")
    const b = getFruit("apple")
    return await Promise.all([a, b])
}

makeSmoothie().then(console.log)

const fruits = ['pineapple', 'apple', 'banana']
const smoothie = fruits.map(fruit => getFruit(fruit))

const fruitLoop = async() => {
    for await (const fruit of smoothie) {
        console.log(fruit)
    }
}
fruitLoop()

const fruitInspection = async() => {
    if (await getFruit('pineapple') === '🍍') {
        console.log('🍍 is a pineapple')
    }
}