function removeDuplicates(nums: number[]): number {
    let i = 0

    while (i < nums.length) {
        if (nums[i] === nums[i+1]) {
            nums.splice(i, 1)
            continue
        }
        i++
    }
    // The challenge asks to return "k" elements after deleting the duplicates.
    // Essentially this means "k" will just be nums.length in ts or js.
    return nums.length
}