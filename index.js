require('dotenv').config()
const apiKey = process.env.XATA_API_KEY;

const options = {
    method: 'POST',
    headers: {Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json'},
    body: '{"page":{"size":15}}'
  };
  
  fetch('https://agnesnduta-mqqqgp.us-east-1.xata.sh/db/HackMambaTest:main/tables/Users/query', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));