import generatePassword from './random-password-generator.js'

const password = generatePassword(12, {
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: true,
})

console.log(password)
