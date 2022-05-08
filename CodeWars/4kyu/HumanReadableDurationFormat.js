class TimeUnit {
    constructor(timeValue, parentUnit, unitType) {
        this.timeValue = timeValue
        this.unitType = unitType
        this.parentUnit = parentUnit
        this.text = ``
    }
    formatText() {
        this.timeValue = Math.floor(this.timeValue)
        if (this.timeValue > 1)
            this.text = `${this.timeValue} ${this.unitType}s`
        else if (this.timeValue === 0)
            this.text = ''
        else
            this.text = `${this.timeValue} ${this.unitType}`
    }
    overflowAdjustments() {
        if (!this.parentUnit)
            return

        let baseUnit = 0
        const type = this.unitType

        if (type === 'second' || type === 'minute')
            baseUnit = 60
        else if (type === 'hour')
            baseUnit = 24
        else if (type === 'day')
            baseUnit = 365

        const overflow = this.timeValue / baseUnit
        if (overflow >= 1) {
            this.parentUnit.timeValue += overflow
            this.timeValue = this.timeValue % baseUnit
        }
    }
}

function formatDuration(sec) {
    if (sec === 0) {
        return "now"
    }

    const years = new TimeUnit(0, null, 'year')
    const days = new TimeUnit(0, years, 'day')
    const hours = new TimeUnit(0, days, 'hour')
    const minutes = new TimeUnit(0, hours, 'minute')
    const seconds = new TimeUnit(sec, minutes, 'second')
    const timeSlots = [seconds, minutes, hours, days, years]

    for (const time of timeSlots) {
        time.overflowAdjustments()
    }
    for (const time of timeSlots) {
        time.formatText()
        console.log(time.text)
    }

    let result = ''
    let index = 0
    let units = 1

    for (const time of timeSlots.reverse()) {
        if (time.unitType === 'second' && units > 0 && time.text !== '' && time.parentUnit.text !== '') {
            result += ` and ${time.text}`
            break
        }

        if (time.text.length > 0) {
            if (result.length > 0) {
                result += ', '
                units++
            }
            result += time.text
        }
        index++
    }
    return result
}

console.log(formatDuration(3600))