import axios from 'axios'


const instance = axios.create({
    // baseURL:"http://localhost:5000/"
    baseURL:"https://form-backend-jh9g.onrender.com"
})

export default instance