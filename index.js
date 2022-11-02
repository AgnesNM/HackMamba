const fs = require("fs");

require('dotenv').config();
const apiKey = process.env.XATA_API_KEY;
    
const options = {
  method: 'GET',
  headers: {Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json'}  
};
      
fetch('https://agnesnduta-mqqqgp.us-east-1.xata.sh/db/HackMambaTest:main/tables/Users/data/rec_cdf02f39dsj678levd8g', options)
.then((response) => { 
  return response.json();
})
.then((json) => {
  fs.writeFile('./users.json', JSON.stringify(json), (err) => {
    if (err) {
      throw new Error('Something went wrong.')
    }
    console.log('JSON written to file. Contents:');
    console.log(fs.readFileSync('users.json', 'utf-8'))
  })
});
