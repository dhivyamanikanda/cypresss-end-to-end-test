const fs = require('fs');

// Read JSON data from the parsed_json.json file
let jsonData;
try {
  jsonData = fs.readFileSync('parsed_json.json', 'utf8');
} catch (error) {
  console.error('Error reading JSON file:', error);
}

// Parse the JSON data if it is not empty
if (jsonData) {
  try {
    // Parse the JSON data into a JavaScript object
    const jsonObject = JSON.parse(jsonData);

    // Access and use the parsed JSON data
    console.log('Parsed JSON Data:', jsonObject);

    // Your further script logic using the parsed JSON data
  } catch (error) {
    console.error('Error parsing JSON data:', error);
  }
} else {
  console.error('JSON data is empty. Ensure the file contains valid JSON data.');
}
