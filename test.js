const jsonData = JSON.parse(process.argv[2]);
console.log('Inside js Parsed JSON Data:', jsonData);

// Object.keys(jsonData).forEach(key => {
//   const nestedObject = jsonData[key];
//   console.log('Key:', key);
//   console.log('Value:', nestedObject);
//   // Access nested properties as needed
// });

// // Access the parsed JSON object
// console.log(jsonData);

console.log('Username (gb):', jsonData.gb.username);
console.log('Password (de):', jsonData.de.password);

