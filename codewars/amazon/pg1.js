// pg
// A local underwriter has informed us that, when underwriting life insurance,
// it’s important to account for the client’s medical conditions, and make sure we adapt
// the quote price given the client’s medical risk.
// We feel awfully silly not having considered this prior, and want to get right on the
// task of building this feature.
// We organized our favorite underwriters in a room and asked them to hammer out a first pass at
// these rules, which we’ve converted into JSON for readability.
// Each rule describes how a monthly quote price should be modified,
// given a medical condition experienced by the user.

// Please create a system which, given an initial base quote price, and a known medical
// condition for a client, calculates the change to that quote given the new medical
// underwriting rules.

// For the above rules, we expect conditions to impact quotes as suggested by the following:

// base_quote = 100.0
// adjust_quote_for_risk(rules, base_quote, "breathes-a-lot")  # 103.0


// base_quote = 50.0
// adjust_quote_for_risk(rules, base_quote, "heart-disease")  # 60.0


const RULES = {
    "medicalRules": [
        {"condition": "heart-disease", "type": "add", "factor": "10"},
        {"condition": "really-big-hair", "type": "add", "factor": "7"},
        {"condition": "pet-alligator", "type": "knockout"},
        {"condition": "breathes-a-lot", "type": "multiply", "factor": "1.03"}
    ]
}

class PolicyHolder {
    constructor(condition, baseQuote) {
        this.condition = condition
        this.baseQuote = Number(baseQuote)
        this.finalQuote = this.baseQuote
        this.uninsurable = false
    }

    adjustQuoteForRisk() {
        const rules = RULES["medicalRules"]
        let type = null
        let factor = null

        for (const rule of rules) {
            if (rule.condition === this.condition) {
                type = rule.type
                factor = Number(rule.factor)
            }
        }

        if (type === "add") {
            this.finalQuote += factor
        }
        else if (type === "multiply") {
            this.finalQuote *= factor
        }
        else {
            this.uninsurable = true
        }
        return this.getFinalQuote()
    }

    getFinalQuote() {
        if (this.uninsurable) {
            return "No way Jose"
        }
        return this.finalQuote
    }
}

const mouthBreather = new PolicyHolder("breathes-a-lot", 100)
const heartRiskMan = new PolicyHolder("heart-disease", 50)

const people = [mouthBreather, heartRiskMan]

for (const person of people) {
    console.log(person.adjustQuoteForRisk())
}
