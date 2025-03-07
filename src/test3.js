
const jsonData = JSON.parse(process.argv[2]);
console.log('Inside js Parsed JSON Data:', jsonData);

console.log('Username (gb):', jsonData.de.username);
console.log('Password (de):', jsonData.de.password);
