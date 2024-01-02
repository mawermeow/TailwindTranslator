const axios = require('axios');
const fs = require('fs');
require('dotenv').config();

const sheetId = process.env.REACT_APP_GOOGLE_SHEET;
const sheetApi = `https://script.google.com/macros/s/AKfycbzWByF-p0lA8U2SWwhFhQiubY_BfkTEJWzBS_JmOmBy2-PEfv0AOtk7vYHHoiwdc9sg/exec?sheetId=${sheetId}`;

axios.get(sheetApi)
    .then(response => {
        const data = response.data;
        fs.writeFileSync('public/website_data.json', JSON.stringify(data, null, 4));
        console.log('Data fetched and saved successfully!');
    })
    .catch(error => {
        console.error('Axios error:', error);
    });
