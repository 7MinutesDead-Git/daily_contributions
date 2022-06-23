// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
function domainName(url) {
    const tokens = ["http://", "www.", "https://"]

    for (const token of tokens) {
        url = url.replace(token, "")
    }
    return url.split(".")[0]
}