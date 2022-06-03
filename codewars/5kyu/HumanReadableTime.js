// https://www.codewars.com/kata/52685f7382004e774f0001f7
function humanReadable (seconds) {
    let minutes = 0
    let hours = 0

    const minutesOverflow = seconds / 60
    if (minutesOverflow >= 1) {
        minutes += minutesOverflow
        minutes = Math.floor(minutes)
        seconds = seconds % 60
    }
    const hoursOverflow = minutes / 60
    if (hoursOverflow >= 1) {
        hours += hoursOverflow
        hours = Math.floor(hours)
        minutes = minutes % 60
    }
    hours = hours.toString().length === 1 ? `0${hours}` : hours
    minutes = minutes.toString().length === 1 ? `0${minutes}` : minutes
    seconds = seconds.toString().length === 1 ? `0${seconds}` : seconds
    return `${hours}:${minutes}:${seconds}`
}