function solution(str){
    let result = ''
    for (const ch of str) {
        result = ch + result
    }
    return result
}