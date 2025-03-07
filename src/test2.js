const jsonData = JSON.parse(process.argv[2]);
console.log('Inside js Parsed JSON Data:', jsonData);

console.log('Username (gb):', jsonData.gb.username);
console.log('Password (de):', jsonData.gb.password);
