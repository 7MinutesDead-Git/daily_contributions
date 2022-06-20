// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
function formatDuration(secInput) {
    if (secInput === 0) {
        return 'now'
    }

    const secondsInYear = 31536000
    const secondsInDay = 86400
    const secondsInHour = 3600
    const secondsInMinute = 60
    const daysInYear = 365
    const hoursInDay = 24
    const minutesInHour = 60

    const years = Math.floor(secInput / secondsInYear)
    const days = Math.floor(secInput / secondsInDay) % daysInYear
    const hours = Math.floor(secInput / secondsInHour) % hoursInDay
    const minutes = Math.floor(secInput / secondsInMinute) % minutesInHour
    const seconds = secInput % secondsInMinute

    const duration = [years, days, hours, minutes, seconds]
    const units = ['year', 'day', 'hour', 'minute', 'second']

    const durationString = duration.map((unitAmount, i) => {
        if (unitAmount === 0)
            return ""

        let itemString = `${unitAmount} ${units[i]}`
        if (unitAmount > 1)
            itemString += "s"
        return itemString

    }).filter(element => {
        // Remove the empty entries.
        return element
    })

    if (durationString.length > 1) {
        const last = durationString.pop()
        return `${durationString.join(", ")} and ${last}`
    }
    else {
        return durationString[0]
    }
}