const jsonObject = JSON.parse(process.env.PARSED_JSON);

console.log('Parsed JSON Data:', jsonObject);

// Access the data for different locales (e.g., gb, de) as needed
const gbUsername = jsonObject.gb.username;
const gbPassword = jsonObject.gb.password;
const gbLocale = jsonObject.gb.locale;

const deUsername = jsonObject.de.username;
const dePassword = jsonObject.de.password;
const deLocale = jsonObject.de.locale;
