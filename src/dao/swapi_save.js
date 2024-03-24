const AWS = require('aws-sdk');
const axios = require('axios');
const { Translate } = require('@google-cloud/translate').v2;
require('dotenv').config();

const apiUrl = 'https://swapi.py4e.com/api/people/';
const projectId = 'api-test-softek';
const keyFilename = 'gcp-credentials.json';

const translate = new Translate({
    projectId,
    keyFilename
});

async function getStarWarspeople(people) {
    try {
        const response = await axios.get(apiUrl + people);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
        throw error;
    }
} 

async function translate_obj(obj, targetLanguage) {
    const translatedKeys = {};
    for (const key of Object.keys(obj)) {
        const translatedKey = await translate.translate(key, targetLanguage);
        translatedKeys[translatedKey[0]] = obj[key];
    }
    return translatedKeys;
}

const insertDynamodb = async (registro) => {

    const dynamoDB = new AWS.DynamoDB.DocumentClient({
        region: process.env.AWS_REGION_SERGIO,
        accessKeyId: process.env.AWS_ACCESS_KEY_ID_SERGIO,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_SERGIO
    });    
    const params = {
      TableName: 'swapi_people',
      Item: registro
    };
  
    try {
      await dynamoDB.put(params).promise();
      console.log("registro : ",registro);
      return registro;
    } catch (error) {
      console.error('Error al insertar el registro:', error);
      throw error;
    }
};

 async function save_swapi(people) {
    try {
        const rpta_people = await getStarWarspeople(people)
        if ("detail" in rpta_people) {
            if ( rpta_people.detail = "Not found") {
                return {
                    statusCode: 400,
                    body: JSON.stringify({
                        error: 'personaje no encontrado, intente con otro numero'
                    })
                };
            }
        }

        const rpta_translate = await translate_obj(rpta_people, 'es')
        rpta_translate.id = people
        const rpta_final = await insertDynamodb(rpta_translate)

        return rpta_final

    } catch (error) {
      console.log(error)
      throw error
    }
}

module.exports = { save_swapi };
