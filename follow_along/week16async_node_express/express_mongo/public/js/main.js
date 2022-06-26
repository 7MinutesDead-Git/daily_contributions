const updateButton = document.querySelector('.btn.edit')
const deleteButton = document.querySelector('.btn.delete')

updateButton.addEventListener('click', async (e) => {
    // Send PUT request to update the post with new data
    const response = await fetch('/recipes', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            name: 'Updated Recipe',
            ingredients: 'Updated Ingredients',
            instructions: 'Updated Instructions'
        })
    })
})