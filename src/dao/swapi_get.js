const AWS = require('aws-sdk');
require('dotenv').config();
const dynamoDB = new AWS.DynamoDB.DocumentClient({
    region: process.env.AWS_REGION_SERGIO,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID_SERGIO,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_SERGIO
});    

const obtenerRegistro = async (clavePrimaria) => {
  console.log(process.env.AWS_REGION_SERGIO, " <<< region")
    const params = {
      TableName: 'swapi_people',
      Key: {
        id: clavePrimaria.toString()
      }
    };  
    try {
      const { Item } = await dynamoDB.get(params).promise();
      if (!Item){
        return {
            message : "personaje no encontrado",
            data : { }
        }
      }
      return {
        message : "personaje encontrado",
        data : Item
      }
    } catch (error) {
      console.error('Error al obtener el registro:', error);
      throw error;
    }
  };

  module.exports = { obtenerRegistro }