import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.1.7:44339/api'
})

export default api
