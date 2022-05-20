const url = require('url')

const portfolioURL = new URL('https://7minutes.dev/#blurb')

// Serialize the URL.
console.log(portfolioURL.href)
console.log(portfolioURL.toString())
// Host / root domain.
console.log(portfolioURL.host)
// Hostname, not including port.
console.log(portfolioURL.hostname)
// Pathname.
console.log(portfolioURL.pathname)
