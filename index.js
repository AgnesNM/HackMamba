const fs = require("fs");
require("dotenv").config();
let cloudinary = require('cloudinary').v2;

const apiKey = process.env.XATA_API_KEY;

// cloudinary configuration
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
});

// upload our image to Cloudinary 

cloudinary.uploader.upload("water.jpg", 
  {resource_type: "image" })
.then((result) => {
  fs.writeFile('./images.json', JSON.stringify(result), (err) => {
    if (err) {
      throw new Error('Oops, something went wrong.')
    }
    console.log(result.url);
    
  })
});


// route to retrieve a specific user using a specific user ID
    
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
    console.log(json);
  })
});

// // route to update a specific user's profile pic 

const addProfilePic = {
  method: 'PATCH',
  headers: {Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json'},
  body: '{"first_name":"Ricky","last_name":"Port","period_covered":"120","cover_status":true,"profile_pic":"http://res.cloudinary.com/ndutared/image/upload/v1667460232/nr3uwls3q6ew8co39thn.jpg"}'
};

fetch('https://agnesnduta-mqqqgp.us-east-1.xata.sh/db/HackMambaTest:main/tables/Users/data/rec_cdf02f39dsj678levd8g', addProfilePic)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));