import axios from 'axios'
import config from '../config'

const request = axios.create({
    baseURL: config.api.url,
    timeout: 10000,
})
export default request

export const fetchSWPerson = async (id: number) => 
    request
        .get(`/people/${id}`)
        .then((data) => console.log(data))
