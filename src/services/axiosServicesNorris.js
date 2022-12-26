import APIRandomJoke from '../utils/config/axios.configNorris'


console.log('APIRequest = ',  APIRandomJoke)

export function getRandomJoke(){
    return APIRandomJoke.get('/', {
        validateStatus: function (status){return status < 500
        }
    })  // respuesta de // https://api.chucknorris.io/jokes/random
    
}
