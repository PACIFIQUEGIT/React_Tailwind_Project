import axios from 'axios'

const API = axios.create({
    //baseURL: 'https://portofolio-express.onrender.com/api/v1',
   baseURL: 'http://localhost:5000/api/v1'
})
export default API