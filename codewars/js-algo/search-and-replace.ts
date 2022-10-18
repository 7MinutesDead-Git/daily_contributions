// should return "He is Sitting on the couch"
console.log(searchReplace("He is Sleeping on the couch Sleeping", "Sleeping", "sitting"))

function searchReplace(sentence: string, target: string, replacement: string) {
    return sentence.replaceAll(target, replacement)
}
