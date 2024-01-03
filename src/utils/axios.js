import axios from 'axios'

export const Axios = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 5000
})

export default Axios
