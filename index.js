var moment = require('moment');
const chalk = require('chalk');


let today = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log("It is " + chalk.cyan(today))

let dayOfYear = moment().dayOfYear()
console.log("It is the " + chalk.magenta(dayOfYear) + chalk.magenta("th") +  " day of the year")

let secs = moment();
let mmtMidnight = secs.clone().startOf('day');
let diffSecs = secs.diff(mmtMidnight, 'seconds');
console.log("It is " + chalk.cyan(diffSecs) + " seconds into the day")

let dst = moment().isDST()
if (dst === true);
console.log("It" + (chalk.green(" is")) + " during daylight savings")

let leap = moment().isLeapYear()
if(leap !== true);
console.log("It" + (chalk.red(" is not")) + " a leap year")
