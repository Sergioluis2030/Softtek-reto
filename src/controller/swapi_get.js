const { obtenerRegistro } = require('../dao/swapi_get')

module.exports.swapi = async (event) => {
    try {
        const queryParams = event.queryStringParameters;
        if (!queryParams || Object.keys(queryParams).length === 0) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    error: 'No se proporcionaron parámetros en la cadena de consulta.'
                })
            };
        }
        const people = queryParams.people;
        console.log('people search id:', people);
        const rpta = await obtenerRegistro(people)

        return {
            statusCode: 200,
            body: JSON.stringify({
                message : rpta.message,
                data: rpta.data
            })
        };
    } catch (err) {
        return {
            statusCode: 404,
            body: JSON.stringify({
                message : "personaje no encontrado"
            })
        };
    }
};