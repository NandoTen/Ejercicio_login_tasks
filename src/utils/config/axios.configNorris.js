import Axios from 'axios'

// Default config AXIOS

export default Axios.create({

    baseURL: 'https://api.chucknorris.io/jokes/random',
    responseType: 'json',
    timeout: 6000,
})