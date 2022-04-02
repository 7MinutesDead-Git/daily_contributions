class Stopwatch {
    constructor() {
        this.running = false
        this.lapTimes = []
        this.elapsed = undefined
        this.startTime = undefined
        this.endTime = undefined
    }
    reset() {
        this.lapTimes = []
        this.elapsed = undefined
        this.running = false
    }
    start() {
        if (!this.running) {
            console.log('start')
            this.running = true
            this.startTime = new Date()
        } else {
            console.log('Stopwatch is already running')
        }
    }
    getElapsed() {
        this.endTime = new Date()
        this.elapsed = this.endTime - this.startTime
        return this.elapsed
    }
    stop() {
        if (this.running) {
            this.running = false
            console.log(this.getElapsed())
        } else {
            console.log('Stopwatch is not running')
        }
    }
    lap() {
        if (this.running) {
            this.getElapsed()
            this.lapTimes.push(this.elapsed)
            console.log(this.lapTimes)
        } else {
            console.log('Stopwatch is not running')
        }
    }
}

const sw = new Stopwatch()