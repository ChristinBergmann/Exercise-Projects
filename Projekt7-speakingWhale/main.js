function translateInput() {
    const resultArray = []
    const vowel = ['a', 'e', 'i', 'o', 'u', 'y']
    const input = document.getElementById("input").value.toLowerCase()

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < vowel.length; j++) {
            if (input[i] === vowel[j]) {
                resultArray.push(vowel[j]);
            }
        }
        if (input[i] === 'e' || input[i] === 'u') {
            resultArray.push(input[i]);
        }
    }
    displayTranslation(resultArray.join('').toUpperCase(), input.toUpperCase());
}
// console.log(resultArray.join('').toUpperCase())

function displayTranslation(resultArray, input) {

    document.getElementById("translation").style.visibility = "visible";

    let translationText = document.createElement("p")
    translationText.innerHTML = `${input} : ${` " ${resultArray} " `}`;
    translationText.style.display = "visible";
    translation.appendChild(translationText)
    document.getElementById("input").value = "";
}