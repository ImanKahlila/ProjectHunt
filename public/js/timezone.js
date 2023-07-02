// Get the autocomplete input element using its ID
const input = document.getElementById("timezone-input");

// Retrieve the list of supported time zones
const supportedTimeZones = Intl.supportedValuesOf("timeZone");

// Initialize the Awesomplete autocomplete on the input element
new Awesomplete(input, { list: supportedTimeZones });
