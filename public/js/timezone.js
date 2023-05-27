const moment = require('moment-timezone');

// Get the autocomplete input element using its ID
const input = document.getElementById('timezone-input');

// Retrieve an array of all timezone names using 'moment.tz.names()'
const timezones = moment.tz.names();

// Initialize the Awesomplete autocomplete on the input element
new Awesomplete(input, { list: timezones });