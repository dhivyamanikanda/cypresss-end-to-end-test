const jsonData = JSON.parse(process.argv[2]);
console.log('Inside js Parsed JSON Data:', jsonData);

jsonData.forEach(secret => {
  console.log('Username:', secret.username);
  console.log('Password:', secret.password);
  console.log('Locale:', secret.locale);
});

