var chalk = require('chalk');
var beep = require('beepbeep');

beep(3, 1000);
console.log(chalk.green('Hello') + ' world ' + chalk.underline.bgBlue('from') + ' NodeJS');