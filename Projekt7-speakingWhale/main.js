// const input = "Hi ,I am a whale and I love you"
const resultArray = []
const vowel = ['a', 'e', 'i', 'o', 'u', 'y']
const input = document.getElementById("input").value.toLowerCase()


function translateInput(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < vowel.length; j++) {
            if (input[i] === vowel[j]) {
                resultArray.push(vowel[j])
            }
        }
        if (input[i] === 'e' || input[i] === 'u') {
            resultArray.push(input[i])
        }
    }
    displayTranslation();
}
console.log(resultArray.join('').toUpperCase())

function displayTranslation() {

    let translationBox = document.getElementById("translation-field").style.visibility = "visible";
    let translationText = document.createElement("p");

    translationText.innerText = resultArray;

    translationBox.appendChild(translationText)



}