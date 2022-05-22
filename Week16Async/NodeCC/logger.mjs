import { EventEmitter } from 'events'
// Generates random IDs.
import { v4 as uuid } from 'uuid'

class Logger extends EventEmitter {
    log(msg) {
        // Emits event called message.
        this.emit('message', { id: uuid(), msg })
    }
}

const logger = new Logger()
logger.on('message', (data) => console.log(`Called Listener: ${data}`))
logger.log('Hey there.')