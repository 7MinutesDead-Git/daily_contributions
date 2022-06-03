const url = require('url')

const portfolioURL = new URL('https://7minutes.dev/blurb?somequery=somevalue')

// Serialize the URL.
console.log(portfolioURL.href)
console.log(portfolioURL.toString())
// Host / root domain.
console.log(portfolioURL.host)
// Hostname, not including port.
console.log(portfolioURL.hostname)
// Pathname.
console.log(portfolioURL.pathname)
// Serialized query
console.log(portfolioURL.search)
// Params object.
console.log(portfolioURL.searchParams)
// Add a param.
console.log("Add params:")
portfolioURL.searchParams.append('newparam', 'newvalue')
console.log(portfolioURL.search)
console.log(portfolioURL.searchParams)
// Loop through params.
for (const [key, value] of portfolioURL.searchParams) {
  console.log(`${key}: ${value}`)
}