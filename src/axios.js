import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://tinderclonebynik.herokuapp.com'
})

export default instance;