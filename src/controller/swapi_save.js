const { save_swapi } = require('../dao/swapi_save');
module.exports.swapi = async (event) => {
    try {
        if (!event.body) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    error: 'No se proporcionó un cuerpo en la solicitud.'
                })
            };
        }
        const requestBody = JSON.parse(event.body);
        if (!requestBody || Object.keys(requestBody).length === 0) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    error: 'No se proporcionaron parámetros en el cuerpo de la solicitud.'
                })
            };
        }

        const { people } = requestBody;
        const data = await save_swapi(people)

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Personaje registrado correctamente !! ',
                data
            })
        };
        
    } catch (err) {
        return {
            statusCode: 404,
            body: JSON.stringify({
                message: 'personaje no encontrado'
            })
        };
    }
};
