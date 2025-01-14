import axios from 'axios'

export default () => {
    return axios.create({
        // baseURL: 'http://localhost:5000',
        baseURL: 'https://web-api-t9vp.onrender.com'
    })
}