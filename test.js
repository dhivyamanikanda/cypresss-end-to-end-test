const fs = require('fs');

// Read JSON data from the parsed_json.json file
const jsonData = fs.readFileSync('parsed_json.json', 'utf8');

try {
  // Parse the JSON data into a JavaScript object
  const jsonObject = JSON.parse(jsonData);

  // Access and use the parsed JSON data
  console.log('Parsed JSON Data:', jsonObject);

  // Your further script logic using the parsed JSON data
} catch (error) {
  console.error('Error parsing JSON data:', error);
}
