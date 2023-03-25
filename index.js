import generatePassword from './random-password-generator.js'

function passwordGenerator(length) {
  const password = generatePassword(length, {
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  })
  return password
}

export default passwordGenerator
