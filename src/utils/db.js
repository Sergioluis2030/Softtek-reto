const AWS = require('aws-sdk');
require('dotenv').config();

const dynamoDB = new AWS.DynamoDB.DocumentClient({
    region: process.env.AWS_REGION_SERGIO,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID_SERGIO,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_SERGIO
});  

module.exports = dynamoDB;
