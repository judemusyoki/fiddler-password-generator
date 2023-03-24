# fiddler-password-generator
This is a simple command line application that generates random passwords based on user-defined options.

## Installation
1. Clone this repository to your local machine.
2. Install dependencies by running npm install in the project directory.
## Usage
To generate a random password, run the following command:
```
node index.js
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
- crypto-random-string: A library for generating random strings using cryptographic methods.
## License
This project is licensed under the MIT License. See the LICENSE file for more information.
