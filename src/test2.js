const jsonData = JSON.parse(process.env.JSON_DATA);
console.log('Inside js Parsed JSON Data:', jsonData);

console.log('Username (gb):', jsonData.gb.username);
console.log('Password (gb):', jsonData.gb.password);
console.log('Locale (gb):', jsonData.gb.locale);
