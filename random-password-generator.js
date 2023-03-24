import cryptoRandomString from 'crypto-random-string'

function generatePassword(length, options) {
  const defaultOptions = {
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  }

  const mergedOptions = { ...defaultOptions, ...options }
  const allowedChars = []

  if (mergedOptions.uppercase) {
    allowedChars.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
  }
  if (mergedOptions.lowercase) {
    allowedChars.push(...'abcdefghijklmnopqrstuvwxyz')
  }
  if (mergedOptions.numbers) {
    allowedChars.push(...'0123456789')
  }
  if (mergedOptions.symbols) {
    allowedChars.push(...'!@#$%^&*()_+-=[]{}|;:",.<>?')
  }

  return cryptoRandomString({ length, characters: allowedChars.toString() })
}

export default generatePassword
