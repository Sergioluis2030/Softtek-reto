module.exports.swapi = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Hola desde mi función Serverless!'
      })
    };
  };