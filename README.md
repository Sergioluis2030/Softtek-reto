### SOFTTEK-RETO - SERGIO QUISPE FALCON

#### POST :
### `https://tskm8lswx5.execute-api.us-east-1.amazonaws.com/dev/swapi`

#### se asignara como parametros 'people' en el body , se enviara un numero que es el id del personaje

```javascript
{
    "people" : "4"
}
```
este endpoint traera la data de la apiswapi y traducira las keys en español, posteriormente traducidas
lo grabara en dynamoDB para luego poder ser consultada con el metodo GET


----------------------------------------------------------------------------
    
#### GET :
### `https://tskm8lswx5.execute-api.us-east-1.amazonaws.com/dev/swapi/?people=4`

para solicitud get se agrega el paremetro en la url de esta manera `?people=4`
debe ingresar un numero del id de personaje, si no  se ah grabado previamente con el metodo post en la bd dynamodb no mostrara nada

ejemplo de respuesta del metodo get : 

```javascript
{
    "message": "personaje encontrado",
    "data": {
        "nombre": "Darth Vader",
        "masa": "136",
        "color de piel": "white",
        "naves estelares": [
            "https://swapi.py4e.com/api/starships/13/"
        ],
        "altura": "202",
        "URL": "https://swapi.py4e.com/api/people/4/",
        "género": "male",
        "mundo natal": "https://swapi.py4e.com/api/planets/1/",
        "vehículos": [],
        "editado": "2014-12-20T21:17:50.313000Z",
        "color de pelo": "none",
        "especies": [
            "https://swapi.py4e.com/api/species/1/"
        ],
        "creado": "2014-12-10T15:18:20.704000Z",
        "Año de nacimiento": "41.9BBY",
        "id": "4",
        "color de los ojos": "yellow",
        "Película (s": [
            "https://swapi.py4e.com/api/films/1/",
            "https://swapi.py4e.com/api/films/2/",
            "https://swapi.py4e.com/api/films/3/",
            "https://swapi.py4e.com/api/films/6/"
        ]
    }
}
```
