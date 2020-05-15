const input = "Hi ,I am a whale and I love you"
const vowel = ['a', 'e', 'i', 'o', 'u', 'y']
const resultArray = []

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
console.log(resultArray.join('').toUpperCase()) // output: IAAAEEAOEEYOUU