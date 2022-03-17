function validParentheses(parens) {
    let openness = 0
    for (const paren of parens) {
        if (paren === "(")
            openness += 1
        if (paren === ")")
            openness -= 1
        // We can't start a new block with a closed parenthesis,
        // so openness should never fall below 0.
        if (openness < 0)
            return false
    }
    return openness === 0;
}