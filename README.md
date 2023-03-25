# fiddler-password-generator
This is a simple command line application that generates random passwords based on user-defined options.

## Requirements
- Nodejs

## Installation
```
npm install fiddler-password-generator
```

## Usage
Import package in your project
```
import passwordGenerator from 'fiddler-random-pass-gen'
```

```
const myNewPassword = passwordGenerator(14)
```
Result:
```
w},*i?@,,,,a,S
```

This will generate a password with the following default options:
- Length: 12 characters
- Uppercase letters: included
- Lowercase letters: included
- Numbers: included
- Symbols: included

You can also specify your own options by passing arguments to the command. The available options are:
- --length: The length of the password (default: 12)
- --no-upper: Exclude uppercase letters
- --no-lower: Exclude lowercase letters
- --no-numbers: Exclude numbers
- --no-symbols: Exclude symbols
For example, to generate a password with a length of 16 characters and no symbols, run the following command:
```
node index.js --length 16 --no-symbols
```
## Credits
This application was built using the following dependencies:
- [crypto-random-string](https://www.npmjs.com/package/crypto-random-string): A library for generating random strings using cryptographic methods.
