function reverseString(string) {
  let letters = string.split('')
  let reversedLetters = []

  for (let i = 0; i < letters.length; i++) {
    reversedLetters.push(letters[letters.length - i - 1])
  }

  return reversedLetters.join('')
}

module.exports = reverseString