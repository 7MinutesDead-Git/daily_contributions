// https://www.codewars.com/kata/51fda2d95d6efda45e00004e/train/javascript
const RANKS = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8]

class User {
    constructor() {
        this.rank = -8
        // Experience points.
        this.progress = 0
    }

    tryLevelUp() {
        if (this.progress >= 100) {
            const levelsGained = Math.floor(this.progress / 100)
            this.rank += levelsGained
            // There is no rank 0, so if user rank ends up as 0, update to 1.
            if (this.rank === 0) {
                this.rank = 1
            }
            // No more leveling after Rank 8.
            if (this.rank >= 8) {
                this.rank = 8
                this.progress = 0
            }
            else {
                this.progress = this.progress % 100
            }
        }
    }

    incProgress(challengeLevel) {
        if (!RANKS.includes(challengeLevel)) {
            throw new Error(`Invalid challenge level: ${challengeLevel}`)
        }
        if (this.rank === 8) {
            return
        }
        const challengeRank = RANKS.indexOf(challengeLevel)
        const userRank = RANKS.indexOf(this.rank)

        if (userRank >= challengeRank + 2) {
            return
        }
        if (userRank === challengeRank + 1) {
            this.progress += 1
        }
        else if (userRank === challengeRank) {
            this.progress += 3
        }
        else {
            const difference = Math.abs(challengeRank - userRank)
            const xpGained = 10 * difference * difference
            this.progress += xpGained
        }
        this.tryLevelUp()
    }
}

const user = new User()
user.rank = -1
user.incProgress(2)
console.log(user.progress)
console.log(user.rank)