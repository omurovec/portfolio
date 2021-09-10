const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
require('dotenv').config();

const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS';

const data = new FormData();
data.append('file', fs.createReadStream('ipfs/index.html'));

return axios
  .post(url, data, {
    maxBodyLength: 'Infinity',
    headers: {
      'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
      pinata_api_key: process.env.PINATA_API_KEY,
      pinata_secret_api_key: process.env.PINATA_SECRET_API_KEY,
    },
  })
  .then((res) => {
    console.log('Content Pinned Successfully!');
    console.log(res.data);
    return res.data;
  })
  .catch((err) => {
    console.log('Error Pinning Content.');
    console.log(err);
  });
