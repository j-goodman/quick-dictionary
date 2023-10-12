const searchButton = document.getElementById("search-button")
const wordName = document.getElementById("word-name")
const definitions = document.getElementById("definitions")
const searchInput = document.getElementById("search-input")

searchButton.onclick = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput.value}`)
    .then(response => response.json())
    .then(data => {
        if (data.title === 'No Definitions Found') {
            wordName.innerText = `No Definitions Found for ${searchInput.value}`
            definitions.innerText = ""
            return false
        }
        wordName.innerText = data[0].word
        definitions.innerText = ""
        for (let definitionObject of data[0].meanings[0].definitions) {
            definitions.innerText += `${definitionObject.definition}
            
            `
        }
    })
}