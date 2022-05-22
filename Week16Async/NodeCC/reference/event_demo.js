const EventEmitter = require('events')

// Create emitter class
class MyEmitter extends EventEmitter { }

// Instantiate object
const emitter = new MyEmitter()

// Event listener
emitter.on('someEvent', () => {
  console.log(`Event fired`)
})

// initialize event
emitter.emit('someEvent')