const prefixes = [
    "http://",
    "https://",
    "www."
]
function domainName(url: string): string {
    let result = url

    for (const prefix of prefixes) {
        result = result.replace(prefix, "")
    }
    const end = result.indexOf(".")
    return result.slice(0, end)
}

console.log(domainName("http://github.com/carbonfive/raygun"))
console.log(domainName("http://www.zombie-bites.com"))
console.log(domainName("https://www.cnet.com"))