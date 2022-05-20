//Code 08 Task.
// Add try/catch.
async function getACuteDogPhoto(){
    try {
        const res = await fetch('https://dog.ceo/api/breeds/image/random')
        const data = await res.json()
        console.log(data)
    }
    catch (err) {
        console.log(`Encountered error while fetching cute dog: ${err}`)
    }
}
getACuteDogPhoto()

